# QuantM

QuantM is a full-stack dashboard application designed as part of the interview process for Massar Capital. This project showcases my full-stack development skills and adherence to industry best practices, leveraging FastAPI for the backend and Next.js for the frontend. The name "QuantM" is derived from "Quantitative Massar," aligning with the application's purpose of providing high-level insights into company operations and the financial world.

---

## Features

- **Dashboard Interface**: Intuitive and interactive dashboard to display high-level data and insights about the company and financial markets.
- **Backend**: Developed using FastAPI, ensuring fast, scalable, and secure APIs.
- **Frontend**: Built with Next.js for a dynamic and responsive user experience.
- **Data Visualization**: Visual representation of financial and operational data.
- **Environment-Specific Configuration**: Seamlessly switches between development and production environments.
- **Best Practices**: Implements clean code principles, modular structure, and environment management.

---

## Tech Stack

### Backend

- **FastAPI**: High-performance Python web framework for API development.
- **PostgreSQL** (or any preferred DB): To manage data persistence.
- **Pydantic**: For data validation and configuration management.

### Frontend

- **Next.js**: React-based framework for server-side rendering and static site generation.
- **Tailwind CSS**: For a sleek, modern design.
- **Chart.js / Recharts**: For data visualization.

### Deployment

- **Docker**: Containerized application for consistent development and production environments.
- **Vercel**: For hosting the frontend.
- **AWS / Render**: For hosting the backend.

---

## Project Structure

```plaintext
QuantM/
├── backend/             # FastAPI application
│   ├── app/
│   │   ├── main.py      # Entry point for the FastAPI app
│   │   ├── models/      # Database models
│   │   ├── routers/     # API endpoints
│   │   └── utils/       # Utility scripts
│   ├── tests/           # Backend unit tests
│   └── requirements.txt # Python dependencies
├── frontend/            # Next.js application
│   ├── pages/           # Next.js pages
│   ├── components/      # Reusable components
│   ├── styles/          # Global and component styles
│   ├── public/          # Static files
│   └── package.json     # Node.js dependencies
├── .gitignore           # Git ignore file
├── README.md            # Project documentation
└── Dockerfile           # Docker configuration
```

---

## Setup Instructions

### Prerequisites

- Python 3.9+
- Node.js 16+
- Docker (optional, for containerized deployment)

### Backend Setup

1. Navigate to the `backend/` directory:
   ```bash
   cd backend
   ```
2. Create a virtual environment and activate it:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```
3. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
4. Run the FastAPI server:
   ```bash
   uvicorn app.main:app --reload
   ```
5. Access the backend at `http://localhost:8000`.

### Frontend Setup

1. Navigate to the `frontend/` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Access the frontend at `http://localhost:3000`.

---

## Deployment

### Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t quantm .
   ```
2. Run the Docker container:
   ```bash
   docker run -p 8000:8000 quantm
   ```

### Production Environment

- **Backend**: Deploy the FastAPI app to AWS, Render, or any preferred hosting platform.
- **Frontend**: Deploy the Next.js app to Vercel or Netlify.

---

## Environment Variables

### Backend

Create a `.env` file in the `backend/` directory with the following variables:

```env
DATABASE_URL=postgresql://user:password@localhost/dbname
SECRET_KEY=your_secret_key
```

### Frontend

Create a `.env.local` file in the `frontend/` directory with the following variable:

```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:8000
```

---

## Testing

### Backend Tests

1. Navigate to the `backend/` directory.
2. Run tests using `pytest`:
   ```bash
   pytest
   ```

### Frontend Tests

1. Navigate to the `frontend/` directory.
2. Run tests using `Jest`:
   ```bash
   npm run test
   ```

---

## Acknowledgments

- This project was developed as part of the interview process with **Massar Capital**.
- Special thanks to the team for the opportunity to showcase my skills.

---

## Contact

For any questions or further information, feel free to reach out:

- **Email**: [shahsuvarli.elvin@example.com]
- **LinkedIn**: [[your-linkedin-profile](http://linkedin.com/in/shahsuvarli/)]

---

QuantM - A Full-Stack Dashboard Application by [Your Name]
