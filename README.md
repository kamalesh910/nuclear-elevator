# Nuclear Elevators - Full Stack Web Application

A modern full-stack web application for Nuclear Elevators company built with Angular frontend and Spring Boot backend.

## Project Structure

```
nuclear-elevator/
├── frontend/                 # Angular application
│   ├── src/app/
│   │   ├── components/      # Page components
│   │   ├── services/        # API services
│   │   └── models/          # TypeScript interfaces
├── src/main/java/           # Spring Boot backend
│   └── com/nuclear/elevator/
│       ├── controller/      # REST controllers
│       ├── service/         # Business services
│       └── model/           # Data models
└── build.gradle            # Gradle build configuration
```

## Features

### Frontend (Angular)
- Responsive design for desktop and mobile
- Navigation: Home, Services, Gallery, Customer Feedback, Contact Us
- Contact form with validation
- Modern UI with CSS Grid and Flexbox

### Backend (Spring Boot)
- REST API endpoint `/api/contact`
- Email service integration
- Input validation
- CORS configuration for Angular integration

### Email Service
- Spring Boot Mail integration
- SMTP configuration (Gmail example)
- Automated email notifications for contact inquiries

## Setup Instructions

### Backend Setup

1. **Configure Email Settings**
   Edit `src/main/resources/application.properties`:
   ```properties
   spring.mail.username=your-email@gmail.com
   spring.mail.password=your-app-password
   app.mail.to=info@nuclearelevators.com
   ```

2. **Run Spring Boot Application**
   ```bash
   ./gradlew bootRun
   ```
   Backend will start on `http://localhost:8080`

### Frontend Setup

1. **Install Dependencies**
   ```bash
   cd frontend
   npm install
   ```

2. **Start Angular Development Server**
   ```bash
   ng serve
   ```
   Frontend will start on `http://localhost:4200`

## API Endpoints

### POST /api/contact
Submit contact inquiry

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "message": "Inquiry about elevator installation"
}
```

**Response:**
```json
{
  "message": "Contact inquiry sent successfully"
}
```

## Email Configuration

### Gmail SMTP Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use the App Password in `application.properties`

### Example Configuration
```properties
spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your-email@gmail.com
spring.mail.password=your-16-digit-app-password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
```

## Technologies Used

### Frontend
- Angular 18+
- TypeScript
- CSS3 with Grid and Flexbox
- Reactive Forms
- HTTP Client

### Backend
- Java 17
- Spring Boot 3.2
- Spring Web
- Spring Mail
- Gradle

## Development

### Adding New Pages
1. Generate component: `ng generate component components/new-page`
2. Add route in `app.routes.ts`
3. Add navigation link in `app.html`

### Adding New API Endpoints
1. Create controller method in `ContactController.java`
2. Add service method if needed
3. Update Angular service to call new endpoint

## Production Deployment

### Backend
```bash
./gradlew build
java -jar build/libs/nuclear-elevator-0.0.1-SNAPSHOT.jar
```

### Frontend
```bash
cd frontend
ng build --prod
```
Deploy `dist/` folder to web server.

## Contact Integration Flow

1. User fills contact form on Angular frontend
2. Form validation ensures all required fields are completed
3. Angular service sends POST request to Spring Boot API
4. Backend validates request and triggers email service
5. Email is sent to configured recipient
6. Success/error response returned to frontend
7. User sees confirmation message