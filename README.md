

# Psychology-Website-Mental-Health-Assessment-Platform
A mental health assessment platform built with React and AWS Cloud, featuring image-based tests, analytics dashboards, and a subscription model.

# 🧠 Psychology Website – Mental Health Assessment Platform

## 📌 Status: In Progress 🚧

This project is under active development and will be regularly updated. Contributions are welcome!

This is a web-based platform that allows users to take a mental health (anxiety/depression) assessment through a structured test flow. The results are analyzed and visualized, helping users better understand their psychological state.

---

## 🚀 Features

- User Registration & Login
- Consent Modal before test begins
- Personal Information Form (Age, Gender, etc.)
- Image-based Psychological Test
- Anxiety/Depression level analysis
- Visual Results via Graphs/Dashboards
- Free tips for stress & anxiety
- Premium subscription model (optional)

---

## 🏗️ Tech Stack

### 👨‍💻 Frontend:
- React.js
- Tailwind CSS
- Chart.js (or any graph library)

### 🔧 Backend:
- Node.js / Express.js *(or Python Flask — based on what you're using)*
- REST API

### 🧠 Data Engineering:
- Apache Spark (for test scoring and batch processing)
- Apache Kafka (for test data streaming)
- Apache Airflow (for scheduling workflows)

### ☁️ Cloud (AWS):
- Amazon S3 – for storing test data & static files
- Amazon RDS or DynamoDB – for user info and test results
- AWS Lambda – for serverless backend logic (optional)
- Amazon EC2 – for deploying backend services
- Amazon QuickSight – for building mental health dashboards (or Power BI as alternative)

---

## 📊 Data Flow Overview

1. **User logs in and completes the test**
2. **Test data is sent via Kafka to a Spark processing job**
3. **Processed results are stored in S3 or RDS**
4. **Dashboards reflect results using QuickSight**
5. **Airflow schedules cleanup, data processing tasks**

---

## 🛡️ Future Enhancements

- ML model to predict anxiety level based on test history
- "A machine learning model to predict anxiety levels based on the user's facial expressions during the test."
- Email notifications/reminders
- Mobile responsive version
- More advanced image-based testing


