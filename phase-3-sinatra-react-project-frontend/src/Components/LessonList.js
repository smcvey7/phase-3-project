import React from "react";
import LessonTile from "./LessonTile";

function LessonList({lessonsInfo, setShowLessons, handleUpdatedLesson, handleDeletedLesson}){

  const lessonTiles = lessonsInfo ? lessonsInfo.map((lesson)=><LessonTile key={lesson.id} lesson={lesson} handleUpdatedLesson={handleUpdatedLesson} handleDeletedLesson={handleDeletedLesson} />) : null

  function hideLessons(){
    setShowLessons(false)
  }

  return(
    <div id="sidebarContainer">
      <div id="lessonDiv">
        <h2 id="lessonTitle">Lessons</h2>
        <button id="hide" onClick={hideLessons}>hide</button>
      </div>
      <div id="sidebar">
        {lessonTiles}
      </div>
    </div>
  )
}


export default LessonList