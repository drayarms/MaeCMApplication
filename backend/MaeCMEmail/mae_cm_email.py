import os
import smtplib
from email.message import EmailMessage

SMTP_HOST = os.getenv("SMTP_HOST")      # e.g. smtp.gmail.com
SMTP_PORT = int(os.getenv("SMTP_PORT")) # 587
SMTP_USER = os.getenv("SMTP_USER")      # your email
SMTP_PASS = os.getenv("SMTP_PASS")      # app password
TO_EMAIL  = os.getenv("TO_EMAIL")       # where contact emails go

def send_contact_email(data):
    msg = EmailMessage()
    msg["Subject"] = "New Contact Form Submission"
    msg["From"] = SMTP_USER
    msg["To"] = TO_EMAIL

    msg.set_content(f"""
		New contact form submission:

		First name: {data.get('firstName')}
		Last name: {data.get('lastName')}
		Email: {data.get('email')}
		Phone: {data.get('phone')}
	""")

    with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
        server.starttls()
        server.login(SMTP_USER, SMTP_PASS)
        server.send_message(msg)