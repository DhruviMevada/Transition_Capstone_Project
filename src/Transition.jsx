import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./App.css";

export default function Transition() {
  const [opacities, setOpacities] = useState([1, 1, 1]);
  const [bgColor, setBgColor] = useState("white");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 2;
      const maxScroll = document.body.scrollHeight - window.innerHeight;
      const scrollRatio = window.scrollY / maxScroll;

      setBgColor(`rgba(0, 0, 0, ${scrollRatio})`);

      const projectElements = [
        document.getElementById("project-1"),
        document.getElementById("project-2"),
        document.getElementById("project-3"),
      ];

      const newOpacities = projectElements.map((el) => {
        if (!el) return 0.3;
        const rect = el.getBoundingClientRect();
        const centerDistance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
        return Math.max(1 - centerDistance / 300, 0.3);
      });
      setOpacities(newOpacities);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="container" style={{ backgroundColor: bgColor }}>
      <div className="portfolio-section">
        {/* <h2 className="section-title">My Projects</h2> */}
        <div className="projects-grid">
          <motion.div id="project-1" className="project-card" style={{ opacity: opacities[0] }}>
            <div className="project-image">
                <img class="img" src="https://th.bing.com/th/id/OIP.94TJeXmwXEixDmvT8bf3-wHaFj?w=1000&h=750&rs=1&pid=ImgDetMain"></img>
            </div>
            <h4 className="project-title">Hawa Mahal
            (Jaipur), India</h4>
            <p className="project-description">The Hawa Mahal is a palace in the city of Jaipur, Rajasthan, India. Built from red and pink sandstone, it is on the edge of the City Palace, Jaipur.Hawa Mahal is known as the “palace of winds“</p>
          </motion.div>
          <motion.div id="project-2" className="project-card" style={{ opacity: opacities[1] }}>
            <div className="project-image">
                <img src="https://th.bing.com/th/id/OIP.Yiu1bIsh0GXgbnv42hnz0QHaFj?w=268&h=200&c=7&r=0&o=5&dpr=1.3&pid=1.7" class="img"></img>
            </div>
            <h3 className="project-title">Rani ki Vav
            Stepwell (Patan), Gujarat</h3>
            <p className="project-description">Rani Ki Vav ('The Queen's Stepwell') is a stepwell situated in the town of Patan in Gujarat, India. It is located on the banks of the Saraswati River.</p>
          </motion.div>
          <motion.div id="project-3" className="project-card" style={{ opacity: opacities[2] }}>
            <div className="project-image">
            <img src="https://imgcld.yatra.com/ytimages/image/upload/v1461929855/Delhi-Red_Fort1.jpg" class="img"></img>
            </div>
            <h3 className="project-title">Red Fort
            (Delhi), India</h3>
            <p className="project-description">The Red Fort, also known as Lal Qila is a historic Mughal fort in Delhi, India, that served as the primary residence of the Mughal emperors.</p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
