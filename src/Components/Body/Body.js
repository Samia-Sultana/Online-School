import React from 'react';
import Course from '../Course/Course';
import './Body.css';

const CourseBody = (props) => {
    var courses = [
        {id:"001",name:"Marketing",Instructor:"Jhon",price:15,info:"Advanced knowledge of Marketing",duration:"4 weeks"},
        {id:"002",name:"Accounting",Instructor:"Lissele",price:14.78,info:"Advanced knowledge of Accounting",duration:"4 weeks"},
        {id:"003",name:"Web development",Instructor:"Emma",price:15.45,info:"basic knowledge of programming of programming ",duration:"4 weeks"},
        {id:"005",name:"Food and Nutrition",Instructor:"Bella",price:10.3,info:"basic knowledge of programming",duration:"4 weeks"},
        {id:"006",name:"Yoga",Instructor:"Shwan",price:10.11,info:"basic knowledge of programming",duration:"4 weeks"},
        {id:"007",name:"Psychology",Instructor:"Nittin",price:11.98,info:"basic knowledge of programming",duration:"4 weeks"},
        {id:"008",name:"Economics",Instructor:"Noah",price:17.97,info:"Advance knowledge of Marketing",duration:"4 weeks"},
        {id:"009",name:"Python",Instructor:"Braile",price:13,info:"Advance knowledge of Marketing",duration:"4 weeks"},
        {id:"010",name:"App developmet",Instructor:"Fin",price:15,info:"basic knowledge of programming",duration:"4 weeks"},
        {id:"011",name:"German",Instructor:"Alice",price:11,info:"No prerequisite knowledge",duration:"4 weeks"}
        ];
    return (
        <div className="courses">
        {
            courses.map(courseInfo => <Course courseInfo={courseInfo} handleEnrollButton={props.handleEnrollButton}></Course>)
        }
        </div>
    );
};

export default CourseBody;