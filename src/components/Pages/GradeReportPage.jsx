import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Grade-Report-Page.css";
import Header from "../header";
import Footer from "../footer";

function Grade() {
  const gradesData = {
    _100: {
      firstSemester: {
        academicYear: "2022/2023",
        semester: "First Semester",
        gpa: 3.75,
        courseCodeList: [
          "DCIT101",
          "DCIT103",
          "MATH121",
          "MATH123",
          "STAT111",
          "UGRC150",
        ],
        courseTitleList: [
          "Introduction to Computer Science",
          "Office Productivity Tools",
          "Algebra and Trigonometry",
          "Vectors and Geometry",
          "Introduction to Statistics and Probability I",
          "Critical Thinking and Practical Reasoning",
        ],
        courseCreditHoursList: [3, 3, 3, 3, 3, 3],
        courseGradeList: ["B+", "A", "B", "A", "A", "A"],
        courseGPTList: [10.5, 12, 9, 12, 12, 12],
      },
      secondSemester: {
        academicYear: "2022/2023",
        semester: "Second Semester",
        gpa: 3.58,
        courseCodeList: [
          "DCIT102",
          "DCIT104",
          "MATH122",
          "MATH126",
          "STAT112",
          "UGRC110",
        ],
        courseTitleList: [
          "Computer Hardware Fundamentals and Circuits",
          "Programming Fundamentals",
          "Calculus I",
          "Algebra and Geometry",
          "Introduction to Statistics and Probability II",
          "Academic Writing I",
        ],
        courseCreditHoursList: [3, 3, 3, 3, 3, 3],
        courseGradeList: ["B", "B+", "C", "A", "A", "A"],
        courseGPTList: [9, 10.5, 6, 12, 12, 12],
      },
    },
    _200: {
      firstSemester: {
        academicYear: "2023/2024",
        semester: "First Semester",
        gpa: "N/A",
        courseCodeList: [
          "CBAS210",
          "DCIT201",
          "DCIT203",
          "DCIT205",
          "DCIT207",
          "MATH223",
        ],
        courseTitleList: [
          "Academic Writing II",
          "Programming I",
          "Digital and Logic Systems Design",
          "Multi Media and Web Design",
          "Computer Organization & Architecture",
          "Calculus II",
        ],
        courseCreditHoursList: [3, 2, 3, 3, 3, 3],
        courseGradeList: ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
        courseGPTList: ["N/A", "N/A", "N/A", "N/A", "N/A", "N/A"],
      },
    },
  };

  const [buttonFilter, setButtonFilter] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("_100");
  const [selectedSemester, setSelectedSemester] = useState("firstSemester");

  const buttonClick = () => {
    setButtonFilter(!buttonFilter);
  };

  const handleLevelChange = (e) => {
    setSelectedLevel(e.target.value);
  };

  const handleSemesterChange = (e) => {
    setSelectedSemester(e.target.value);
  };

  return (
    <>
      <Header />
      <div className="grade-body">
        <div className="filter">
          <button onClick={buttonClick}>
            <FontAwesomeIcon icon={faFilter} className="icon" />
            <h3>Filter</h3>
          </button>
          <div className={buttonFilter ? "options options-open" : "options"}>
            <label>
              <select
                name="filter-options"
                id="level"
                value={selectedLevel}
                onChange={handleLevelChange}
              >
                <option value="_100">2022/2023</option>
                <option value="_200">2023/2024</option>
              </select>
            </label>
            <label>
              <select
                name="filter-options"
                id="semester"
                value={selectedSemester}
                onChange={handleSemesterChange}
              >
                <option value="firstSemester">Semester One</option>
                <option value="secondSemester">Semester Two</option>
              </select>
            </label>
          </div>
        </div>
        <div className="grade-details">
          <div className="other-details">
            <h4>
              Academic Year:{" "}
              {gradesData[selectedLevel]?.[selectedSemester]?.academicYear}
            </h4>{" "}
            |<h4>Level{selectedLevel}</h4> |
            <h4>
              Semester:{" "}
              {gradesData[selectedLevel]?.[selectedSemester]?.semester}
            </h4>{" "}
            |<h4>GPA: {gradesData[selectedLevel]?.[selectedSemester]?.gpa}</h4>
          </div>
          <table border={0}>
            <thead>
              <th>Course Code</th>
              <th>Course Name</th>
              <th>Course Credit Hours</th>
              <th>Course Grade</th>
              <th>Course GPT</th>
            </thead>
            <tbody>
              {gradesData[selectedLevel]?.[
                selectedSemester
              ]?.courseCodeList.map((code, index) => (
                <tr key={code}>
                  <td>{code}</td>
                  <td>
                    {
                      gradesData[selectedLevel]?.[selectedSemester]
                        ?.courseTitleList[index]
                    }
                  </td>
                  <td>
                    {
                      gradesData[selectedLevel]?.[selectedSemester]
                        ?.courseCreditHoursList[index]
                    }
                  </td>
                  <td>
                    {
                      gradesData[selectedLevel]?.[selectedSemester]
                        ?.courseGradeList[index]
                    }
                  </td>
                  <td>
                    {
                      gradesData[selectedLevel]?.[selectedSemester]
                        ?.courseGPTList[index]
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Grade;
