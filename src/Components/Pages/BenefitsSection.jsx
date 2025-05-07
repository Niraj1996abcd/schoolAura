import { Card } from "react-bootstrap";
import {
  FaTasks,
  FaFileAlt,
  FaInfoCircle,
  FaEye,
  FaLink,
  FaShareAlt,
} from "react-icons/fa";

const benefits = [
  {
    icon: <FaTasks size={30} />,
    title: "Task Activities",
    description:
      "Daily assignments and tasks can be easily completed through online availability of information. Subject wise homework can be submitted online which helps students to finish their tasks online.",
  },
  {
    icon: <FaFileAlt size={30} />,
    title: "Exam Results",
    description:
      "Exam and assessment results of each individual student can be seen. The report cards will be generated online for each individual student.",
  },
  {
    icon: <FaInfoCircle size={30} />,
    title: "Notice Updates",
    description:
      "The necessary announcements and updates will reach to the students and parents quickly.",
  },
  {
    icon: <FaEye size={30} />,
    title: "Monitoring",
    description:
      "All the essential academic and administrative tasks can be easily monitored, such as students profile, exam results, fee details, transportation details etc.",
  },
  {
    icon: <FaLink size={30} />,
    title: "Connectivity",
    description:
      "When all the information is available online, and is shared regularly with parents and students transparency will be maintained.",
  },
  {
    icon: <FaShareAlt size={30} />,
    title: "Planning & Sharing",
    description:
      "It becomes important nowadays for students to share their thoughts and ideas. SchoolAura Smart Education Platform will provide you a perfect stage to showcase and share your brilliant ideas.",
  },
];

export default function BenefitsSection() {
  return (
    <div className="container my-5">
      <div className="text-center mb-4">
        <h3 className="fw-bold">BENEFITS OF SCHOOLAURA</h3>
        <h5 className="text-danger">FOR STUDENT</h5>
      </div>
      <div className="row">
        {benefits.map((item, idx) => (
          <div className="col-lg-4 col-md-6 mb-4" key={idx}>
            <Card className="shadow-sm h-100 text-center p-3 border rounded">
              <div className="mb-2 text-primary">{item.icon}</div>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text style={{ fontSize: "0.9rem" }}>
                {item.description}
              </Card.Text>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}
