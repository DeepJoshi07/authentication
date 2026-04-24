export const generateOTP = () => {
  return Math.floor(100000 + Math.random() * 900000).toString();
};

export const getOtpHtml = (otp) => {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Your OTP Code</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background-color: #f6f6f6;
      margin: 0;
      padding: 0;
    }
    .container {
      max-width: 600px;
      margin: 40px auto;
      background: #ffffff;
      border-radius: 8px;
      padding: 20px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.1);
    }
    h2 {
      color: #333333;
    }
    .otp-box {
      font-size: 24px;
      font-weight: bold;
      color: #2c3e50;
      background: #f0f0f0;
      padding: 12px;
      text-align: center;
      border-radius: 6px;
      margin: 20px 0;
    }
    p {
      color: #555555;
      line-height: 1.5;
    }
    .footer {
      font-size: 12px;
      color: #999999;
      margin-top: 30px;
      text-align: center;
    }
  </style>
</head>
<body>
  <div class="container">
    <h2>Hello {{name}},</h2>
    <p>Your One-Time Password (OTP) is:</p>
    <div class="otp-box">${otp}</div>
    <p>
      Please use this code to complete your verification.  
      For security reasons, this OTP will expire in 10 minutes.
    </p>
    <p>If you did not request this, please ignore this email.</p>
    <div class="footer">
      &copy; {{year}} Your Company Name. All rights reserved.
    </div>
  </div>
</body>
</html>
`;
};
