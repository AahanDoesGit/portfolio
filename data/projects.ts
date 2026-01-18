export interface Project {
    id: number;
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    image: string;
    category: string;
}

export const projects: Project[] = [
    {
        id: 1,
        title: "Job Portal",
        description: "Full-stack job portal with authentication and real-time updates",
        longDescription: "A comprehensive job portal application built with React and Node.js. Features include user authentication, job posting, application tracking, and real-time notifications. Implemented with a clean UI and responsive design.",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "JWT"],
        image: "/projects/job-portal.png",
        category: "Full-Stack Development"
    },
    {
        id: 2,
        title: "Raspberry Pi",
        description: "IoT-based home automation system using Raspberry Pi",
        longDescription: "Smart home automation system built with Raspberry Pi. Controls lights, temperature, and security cameras through a web interface. Includes real-time sensor data monitoring and automated scheduling.",
        technologies: ["Python", "Raspberry Pi", "Flask", "MQTT", "React"],
        image: "/projects/raspberry-pi.png",
        category: "Embedded Systems"
    },
    {
        id: 3,
        title: "LattePanda",
        description: "Real-time weather monitoring system with data visualization",
        longDescription: "Weather station built with LattePanda board featuring multiple sensors for temperature, humidity, pressure, and air quality. Data is visualized through interactive charts and stored in a database for historical analysis.",
        technologies: ["Python", "LattePanda", "Embedded Linux", "InfluxDB", "Grafana"],
        image: "/projects/lattepanda.jpg",
        category: "Embedded Systems"
    },
    {
        id: 4,
        title: "Task Management App",
        description: "Collaborative task management with real-time sync",
        longDescription: "A collaborative task management application with real-time synchronization, team collaboration features, and productivity analytics. Supports drag-and-drop, notifications, and integrations.",
        technologies: ["React", "Firebase", "Tailwind CSS", "TypeScript"],
        image: "/projects/task-manager.jpg",
        category: "Frontend Development"
    }
];
