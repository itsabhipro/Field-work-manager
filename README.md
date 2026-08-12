# Field Service Manager

A full-stack **Field Service Management** system designed to digitize and streamline operations between field technicians and office staff.

🔗 **Live Demo:** [field-service-manager-demo](https://field-work-manager.vercel.app/

---

## 🎯 Problem Statement

Many field service companies still rely on paper forms, phone calls, and manual updates between technicians and office staff. This leads to:

- Delayed job status updates
- Lost or incomplete paperwork
- Poor visibility for management
- Inefficient coordination
- paper wastage
- lack of accountebility
- wastage of time
- repeated task

**Field Service Manager** solves this by providing a digital platform for both technicians and office users.

---

## ✨ Key Features

### For Technicians
- View and complete the complain
- Update job status in real-time
- Make service report on the way
- Automatically material request is created
- Mobile application for technicians and driver. No tablet required
- One task only one time 5 clicks to complete work.

### For Office / Admin
- Create and dispatch to dispatchers to distribute the complaints to technician teams
- Track real-time status of all jobs
- View technician activity
- Dashboard with overview of operations

### Common
- Role-based access (Technician, Driver, dispatcher, creator)
- Secure authentication (RBAC with supabase)
- Clean and responsive UI
- PDF and Excel generation
- POS facility

---

## 🛠️ Tech Stack

**Frontend**
- Next.js 14
- React native Expo
- React 18
- TypeScript
- Tailwind CSS
- Lucide Icons

**Data**
- Mock data layer (ready for Supabase / Azure SQL)

---

## 🚀 Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---
## Flow of operation
  Creator-> draft complain -> dispatch -> dispatcher accepts-> assign to technician -> technician accepts -> give answer to system like are you driving? -> start work -> can hold -> if not possible to fix or other reason
                                                                                                                                                                       -> start -> make service report -> - finish without material request - finish complain
                                                                                                                                                                       
### Material request flow
  technician -> submit request -> manager -> will approve -> store manager -> collecting stuffs -> make a qr code -> update for ready for delivery -> technician notified -> technician scans qr code -> if matches his credentials -> stock transaction -> confirmation message -> done

## 📌 Current Status

- **Started:** August 2026
- **Status:** MVP demo live on Vercel
- Full backend (ASP.NET Core / Supabase) in progress
- Development on the way please follow me on linkdin i post project update every day.
---

## 📫 Contact

**Abhishek Kumar**  
Full Stack Developer  
LinkedIn: [linkedin.com/in/abhishek-kumar-172900382](https://linkedin.com/in/abhishek-kumar-172900382)  
Email: itsabhipro@outlook.com
