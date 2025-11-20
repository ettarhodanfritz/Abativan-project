from flask import Flask, request, redirect, flash
import smtplib
from email.mime.text import MIMEText

app = Flask(__name__)
app.secret_key = "replace_with_a_secret_key"  # Needed for flash messages

# ----------------------------
# Email Configuration
# ----------------------------
EMAIL_ADDRESS = "rhodanfritz@gmail.com"         # Your Gmail
EMAIL_PASSWORD = "rkbwrwcsppfyncqo"             # Gmail App Password
RECIPIENT_EMAIL = "rhodanfritz@gmail.com"       # Destination email

def send_email(subject, body, recipient=RECIPIENT_EMAIL):
    msg = MIMEText(body)
    msg['Subject'] = subject
    msg['From'] = EMAIL_ADDRESS
    msg['To'] = recipient

    with smtplib.SMTP('smtp.gmail.com', 587) as server:
        server.starttls()
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)

# ----------------------------
# Home Route
# ----------------------------
@app.route("/")
def home():
    return "<h1>Abativan Backend Running</h1><p>Use your forms to submit requests.</p>"

# ----------------------------
# Request Info Route
# ----------------------------
@app.route("/request-info", methods=["POST"])
def request_info():
    name = request.form.get("name")
    email = request.form.get("email")
    phone = request.form.get("phone")
    vehicle = request.form.get("vehicle")
    message = request.form.get("message")

    if not name or not email or not vehicle:
        flash("Please fill in all required fields.", "error")
        return redirect(request.referrer)

    body = f"""
Name: {name}
Email: {email}
Phone: {phone}
Vehicle: {vehicle}
Message:
{message}
"""
    send_email(f"Request Info: {vehicle}", body)
    flash("Request submitted successfully!", "success")
    return redirect(request.referrer)

# ----------------------------
# Newsletter Route
# ----------------------------
@app.route("/subscribe", methods=["POST"])
def subscribe():
    email = request.form.get("email")
    if not email:
        flash("Please enter your email.", "error")
        return redirect(request.referrer)

    body = f"New subscriber: {email}"
    send_email("New Newsletter Subscription", body)
    flash("Subscribed successfully!", "success")
    return redirect(request.referrer)

# ----------------------------
# Contact Form Route
# ----------------------------
@app.route("/contact", methods=["POST"])
def contact():
    name = request.form.get("name")
    email = request.form.get("email")
    subject = request.form.get("subject")
    message = request.form.get("message")

    if not name or not email or not subject or not message:
        flash("Please fill in all required fields.", "error")
        return redirect(request.referrer)

    body = f"""
Name: {name}
Email: {email}
Subject: {subject}
Message:
{message}
"""
    send_email(f"Contact Form: {subject}", body)
    flash("Message sent successfully!", "success")
    return redirect(request.referrer)

# ----------------------------
# Run Flask App
# ----------------------------
if __name__ == "__main__":
    app.run(debug=True)