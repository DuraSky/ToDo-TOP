(()=>{"use strict";class e{constructor(e){this.projectName=e,this.task=[]}addTask(e){this.task.push(e)}displayTask(e){console.log(this.task[e-1])}getDescription(){return this.task.map((e=>e.description))}getPrio(){return this.task.map((e=>e.priority))}getDueDate(){return this.task.map((e=>e.dueDate))}getID(){return console.log(this.task.map((e=>e.id)))}}function t(e){let t=0,n=0;const o=document.createElement("div"),i=document.createElement("input");i.setAttribute("type","text"),i.setAttribute("name","setProperty"),i.setAttribute("id","setProperty");const a=document.createElement("label");a.setAttribute("for","setProperty"),a.innerHTML="Task Name:",o.classList.add("taskDiv");const c=document.createElement("select");c.setAttribute("name","setPrio"),c.setAttribute("id","setPrio");const r=document.createElement("option");r.setAttribute("value","high");const d=document.createTextNode("High"),s=document.createElement("option");s.setAttribute("value","medium");const l=document.createTextNode("Medium"),p=document.createElement("option");p.setAttribute("value","low");const m=document.createTextNode("Low");r.appendChild(d),s.appendChild(l),p.appendChild(m),c.appendChild(r),c.appendChild(s),c.appendChild(p);const u=document.createElement("label");u.setAttribute("for","setPrio"),u.innerHTML="Add Priority";const h=document.createElement("input");h.setAttribute("type","date"),h.setAttribute("name","taskDueDate"),h.setAttribute("id","taskDueDate"),h.setAttribute("required","");const g=document.createElement("label");g.setAttribute("for","taskDueDate"),g.innerHTML="Due: ";const k=document.createElement("button");k.innerHTML="add";const E=document.createElement("div");return E.classList.add("taskOptions"),k.addEventListener("click",(()=>{const a=i.value,r=c.value,d=h.value;e.addTask({description:a,priority:r,dueDate:d,id:t++}),n++,e.task,(JSON.parse(localStorage.getItem("Projects"))||[]).find((e=>e.projectName===project.projectName));const s=document.createElement("div");s.classList.add("currentTasks"),s.setAttribute("data-id",n-1),i.value="",console.log(e);const l=s.dataset.id;console.log(l+"for currenttaskDiv"),s.innerHTML=`Task name: ${e.getDescription()[e.task.length-1]},\n             priority: ${e.getPrio()[e.task.length-1]},\n             it is due till ${e.getDueDate()[e.task.length-1]}`;const p=document.createElement("button");p.innerHTML="Mark as complete",p.addEventListener("click",(()=>{for(let t=0;t<e.task.length;t++)e.task[t].id==l&&(s.classList.contains("complete")?s.classList.remove("complete"):s.classList.add("complete"))}));const m=document.createElement("button");m.classList.add("deleteTask"),m.innerHTML="Delete Task",m.addEventListener("click",(()=>{for(let t=0;t<e.task.length;t++)e.task[t].id==l&&(e.task.splice(t,1),s.innerHTML=`Task name: ${e.getDescription()[t]},\n                     priority: ${e.getPrio()[t]},\n                     it is due till ${e.getDueDate()[t]}`);o.removeChild(s)}));const u=document.createElement("button");u.innerHTML="Edit Name",u.addEventListener("click",(()=>{let t=prompt("New Task name:");for(let n=0;n<e.task.length;n++)e.task[n].id==l&&(e.task[n].description=t,s.innerHTML=`Task name: ${e.getDescription()[n]},\n                     priority: ${e.getPrio()[n]},\n                     it is due till ${e.getDueDate()[n]}`);console.log(e),s.appendChild(p),s.appendChild(u),s.appendChild(m)})),o.appendChild(s),s.appendChild(p),s.appendChild(u),s.appendChild(m)})),E.appendChild(a),E.appendChild(i),E.appendChild(u),E.appendChild(c),E.appendChild(g),E.appendChild(h),E.appendChild(k),o.appendChild(E),o}const n=document.getElementById("content"),o=document.getElementById("projectName");document.getElementById("submit").addEventListener("click",(()=>{const i=document.createElement("div");i.setAttribute("id","projectNameDiv");const a=document.createElement("div");a.setAttribute("id","projectHeadline");const c=document.createElement("h3");let r=o.value,d=new e(r);c.innerHTML=`Project name: ${r}`;const s=t(d),l=document.createElement("button");l.innerHTML="Delete Project";const p=document.createElement("button");p.innerHTML="Edit Project",!1===function(e){let t=JSON.parse(localStorage.getItem("Projects"))||[];return t.find((t=>t.projectName===e.projectName))?(alert("Names are the same"),!0):(t.push(e),localStorage.setItem("Projects",JSON.stringify(t)),console.log("Project added successfully"),!1)}(d)&&n.appendChild(i),i.appendChild(a),a.appendChild(c),a.appendChild(l),a.appendChild(p),i.appendChild(s),l.addEventListener("click",(()=>{n.removeChild(i),function(e){const t=JSON.parse(localStorage.getItem("Projects"))||[];console.log(JSON.stringify(t)),console.log(t.length);for(let n=0;n<t.length;n++)t[n].projectName===e.projectName&&(console.log("deleting this"),t.splice(n,1),localStorage.setItem("Projects",JSON.stringify(t)),console.log(t))}(d)})),p.addEventListener("click",(()=>{let e=prompt("enter new project name:");!function(e,t){const n=JSON.parse(localStorage.getItem("Projects"))||[];for(let o=0;o<n.length;o++)n[o].projectName===e.projectName&&(n[o].projectName=t,console.log(n[o].projectName),localStorage.setItem("Projects",JSON.stringify(n)))}(d,e),console.log(e),r=e,d.projectName=r,c.innerHTML=`Project name is: ${r}`,c.appendChild(l),c.appendChild(p)})),o.value="",console.log(d)})),window.onload=function(){!function(e){const o=document.createElement("div");o.setAttribute("id","projectNameDiv");const i=document.createElement("div");i.setAttribute("id","projectHeadline");const a=document.createElement("h3");a.innerHTML=`Project name is: ${e.projectName}`;const c=t(e),r=document.createElement("button");r.innerHTML="Delete Project";const d=document.createElement("button");d.innerHTML="Edit Project",n.appendChild(o),o.appendChild(i),i.appendChild(a),i.appendChild(r),i.appendChild(d),o.appendChild(c),r.addEventListener("click",(()=>{n.removeChild(o)})),d.addEventListener("click",(()=>{let t=prompt("Enter new project name:");console.log(t),e.projectName=t,a.innerHTML=`Project name is: ${t}`,a.appendChild(r),a.appendChild(d)}))}(new e("Default Project"))}})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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dUIsRUFBVUosRUFBV3NDLEdBRXJCc0IsRUFBbUJ2RCxTQUFTQyxjQUFjLFVBQ2hEc0QsRUFBaUJsRCxVQUFZLGlCQUU3QixNQUFNbUQsRUFBaUJ4RCxTQUFTQyxjQUFjLFVBQzlDdUQsRUFBZW5ELFVBQVksZUFHM0IyQyxFQUFRaEMsWUFBWW1DLEdBQ3BCQSxFQUFlbkMsWUFBWW9DLEdBQzNCQSxFQUFtQnBDLFlBQVlxQyxHQUUvQkQsRUFBbUJwQyxZQUFZdUMsR0FDL0JILEVBQW1CcEMsWUFBWXdDLEdBQy9CTCxFQUFlbkMsWUFBWWpCLEdBRTNCd0QsRUFBaUJqQyxpQkFBaUIsU0FBUyxLQUN2QzBCLEVBQVFKLFlBQVlPLEVBQWUsSUFHdkNLLEVBQWVsQyxpQkFBaUIsU0FBUyxLQUNyQyxJQUFJMEMsRUFBWWpCLE9BQU8sMkJBQ3ZCL0QsUUFBUUMsSUFBSStFLEdBQ1ovQixFQUFRekQsWUFBY3dGLEVBQ3RCWCxFQUFVaEQsVUFBWSxvQkFBb0IyRCxJQUMxQ1gsRUFBVXJDLFlBQVl1QyxHQUN0QkYsRUFBVXJDLFlBQVl3QyxFQUFlLEdBRTdDLENBeENJYSxDQUR1QixJQUFJL0YsRUFBUSxtQkFFdkMsQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8tdG9wLy4vc3JjL2NvbnN0cnVjdG9yLmpzIiwid2VicGFjazovL3RvZG8tdG9wLy4vc3JjL3Rhc2tzLmpzIiwid2VicGFjazovL3RvZG8tdG9wLy4vc3JjL3N0b3JhZ2UuanMiLCJ3ZWJwYWNrOi8vdG9kby10b3AvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKHByb2plY3ROYW1lKXtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgICAgICB0aGlzLnRhc2sgPSBbXTtcbiAgICB9XG5cbiAgICBhZGRUYXNrKG5ld1Rhc2spe1xuICAgICAgICB0aGlzLnRhc2sucHVzaChuZXdUYXNrKTtcbiAgICB9XG5cbiAgICBkaXNwbGF5VGFzayhpbmRleCl7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudGFza1tpbmRleC0xXSlcbiAgICB9XG5cbiAgICBnZXREZXNjcmlwdGlvbigpe1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrLm1hcCh0YXNrID0+IHRhc2suZGVzY3JpcHRpb24pOyBcbiAgICB9XG5cbiAgICBnZXRQcmlvKCl7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2subWFwKHRhc2sgPT4gdGFzay5wcmlvcml0eSk7IFxuICAgIH1cblxuICAgIGdldER1ZURhdGUoKXtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFzay5tYXAodGFzayA9PiB0YXNrLmR1ZURhdGUpOyBcbiAgICB9XG5cbiAgICBnZXRJRCgpe1xuICAgICAgICByZXR1cm4gY29uc29sZS5sb2codGhpcy50YXNrLm1hcCh0YXNrID0+IHRhc2suaWQpKTtcbn1cbn0iLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vY29uc3RydWN0b3JcIjtcbmltcG9ydCB7IHN0b3JlVGFza3MgfSBmcm9tIFwiLi9zdG9yYWdlXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVUYXNrKGNyZWF0ZU5ld1Byb2plY3Qpe1xuICAgIGxldCBkYXRhQ291bnRlciA9IDA7XG4gICAgbGV0IHRhc2tDb3VudGVyID0gMDtcblxuICAgIGNvbnN0IHRhc2tEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIFxuICAgIC8vRE9NIGZvciBhZGRpbmcgVGFza3MgaW50byBQcm9qZWN0c1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZShcInR5cGVcIiwgXCJ0ZXh0XCIpO1xuICAgIGFkZFRhc2tGb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzZXRQcm9wZXJ0eVwiKTtcbiAgICBhZGRUYXNrRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInNldFByb3BlcnR5XCIpO1xuICAgIFxuICAgIGNvbnN0IGFkZExhYmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xuICAgIGFkZExhYmVsLnNldEF0dHJpYnV0ZShcImZvclwiLCBcInNldFByb3BlcnR5XCIpO1xuICAgIGFkZExhYmVsLmlubmVySFRNTCA9IFwiVGFzayBOYW1lOlwiO1xuICAgIFxuICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZChcInRhc2tEaXZcIik7XG4gICAgXG4gICAgLy9ET00gZm9yIGFkZGluZyBwcmlvcml0eSBvbiBUYXNrc1xuICAgIGNvbnN0IGFkZFByaW9Gb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlbGVjdFwiKTsgIFxuICAgIGFkZFByaW9Gb3JtLnNldEF0dHJpYnV0ZShcIm5hbWVcIiwgXCJzZXRQcmlvXCIpO1xuICAgIGFkZFByaW9Gb3JtLnNldEF0dHJpYnV0ZShcImlkXCIsIFwic2V0UHJpb1wiKTtcbiAgICBcbiAgICBjb25zdCBvcHRpb25zSGlnaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uc0hpZ2guc2V0QXR0cmlidXRlKFwidmFsdWVcIiwgXCJoaWdoXCIpO1xuICAgIGNvbnN0IG9wdGlvbnNUZXh0SGlnaCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiSGlnaFwiKTtcbiAgICBcbiAgICBjb25zdCBvcHRpb25zTWVkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIm9wdGlvblwiKTtcbiAgICBvcHRpb25zTWVkLnNldEF0dHJpYnV0ZShcInZhbHVlXCIsIFwibWVkaXVtXCIpO1xuICAgIGNvbnN0IG9wdGlvbnNUZXh0TWVkID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJNZWRpdW1cIik7XG4gICAgXG4gICAgY29uc3Qgb3B0aW9uc0xvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJvcHRpb25cIik7XG4gICAgb3B0aW9uc0xvdy5zZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiLCBcImxvd1wiKTtcbiAgICBjb25zdCBvcHRpb25zVGV4dExvdyA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwiTG93XCIpO1xuICAgIFxuICAgIG9wdGlvbnNIaWdoLmFwcGVuZENoaWxkKG9wdGlvbnNUZXh0SGlnaCk7XG4gICAgb3B0aW9uc01lZC5hcHBlbmRDaGlsZChvcHRpb25zVGV4dE1lZCk7XG4gICAgb3B0aW9uc0xvdy5hcHBlbmRDaGlsZChvcHRpb25zVGV4dExvdyk7XG4gICAgYWRkUHJpb0Zvcm0uYXBwZW5kQ2hpbGQob3B0aW9uc0hpZ2gpO1xuICAgIGFkZFByaW9Gb3JtLmFwcGVuZENoaWxkKG9wdGlvbnNNZWQpO1xuICAgIGFkZFByaW9Gb3JtLmFwcGVuZENoaWxkKG9wdGlvbnNMb3cpO1xuICAgIFxuICAgIGNvbnN0IGFkZExhYmVsUHJpbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcbiAgICBhZGRMYWJlbFByaW8uc2V0QXR0cmlidXRlKFwiZm9yXCIsIFwic2V0UHJpb1wiKTtcbiAgICBhZGRMYWJlbFByaW8uaW5uZXJIVE1MID0gXCJBZGQgUHJpb3JpdHlcIjtcbiAgICBcbiAgICAvL0RPTSBmb3IgYWRkaW5nIGR1ZSBkYXRlIG9uIHRhc2tzXG4gICAgY29uc3QgYWRkVGFza0R1ZURhdGVGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuICAgIGFkZFRhc2tEdWVEYXRlRm9ybS5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIFwiZGF0ZVwiKTtcbiAgICBhZGRUYXNrRHVlRGF0ZUZvcm0uc2V0QXR0cmlidXRlKFwibmFtZVwiLCBcInRhc2tEdWVEYXRlXCIpO1xuICAgIGFkZFRhc2tEdWVEYXRlRm9ybS5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInRhc2tEdWVEYXRlXCIpO1xuICAgIGFkZFRhc2tEdWVEYXRlRm9ybS5zZXRBdHRyaWJ1dGUoXCJyZXF1aXJlZFwiLCBcIlwiKVxuICAgIFxuICAgIGNvbnN0IGFkZFRhc2tEdWVEYXRlTGFiZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XG4gICAgYWRkVGFza0R1ZURhdGVMYWJlbC5zZXRBdHRyaWJ1dGUoXCJmb3JcIiwgXCJ0YXNrRHVlRGF0ZVwiKTtcbiAgICBhZGRUYXNrRHVlRGF0ZUxhYmVsLmlubmVySFRNTCA9IFwiRHVlOiBcIjtcbiAgICBcbiAgICAvL0RPTSBmb3IgYWRkaW5nIGJ1dHRvbiB0byBhZGQgVGFza3NcbiAgICBjb25zdCBhZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgIGFkZEJ1dHRvbi5pbm5lckhUTUwgPSBcImFkZFwiXG5cbiAgICAvL0RPTSBmb3IgYWRkaW5nIHRhc2tzIG9wdGlvbnMgaW50byBhIGRpdlxuICAgIGNvbnN0IHRhc2tPcHRpb25zRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICB0YXNrT3B0aW9uc0Rpdi5jbGFzc0xpc3QuYWRkKFwidGFza09wdGlvbnNcIikgICAgICBcbiAgICAgICAgXG4gICAgLy9UYXNrcyBiZWluZyBhZGRlZCB0byBhcnJheVxuICAgIGFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgY29uc3QgdGFza1ZhbHVlID0gYWRkVGFza0Zvcm0udmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9WYWx1ZSA9IGFkZFByaW9Gb3JtLnZhbHVlO1xuICAgICAgICBjb25zdCBkdWVEYXRlVmFsdWUgPSBhZGRUYXNrRHVlRGF0ZUZvcm0udmFsdWU7XG5cbiAgICAgICAgLy8gaWYodGFza1ZhbHVlPT1cIlwifHxwcmlvVmFsdWU9PVwiXCJ8fGR1ZURhdGVWYWx1ZT09XCJcIil7XG4gICAgICAgIC8vIHJldHVybiBhbGVydChcIkZpbGwgb3V0IGFsbCB0aGUgZmllbGRzXCIpXG4gICAgICAgIC8vIH1cbiAgICBcbiAgICAgICAgIGNyZWF0ZU5ld1Byb2plY3QuYWRkVGFzayh7IFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IHRhc2tWYWx1ZSxcbiAgICAgICAgICAgIHByaW9yaXR5OiBwcmlvVmFsdWUsXG4gICAgICAgICAgICBkdWVEYXRlOiBkdWVEYXRlVmFsdWUsXG4gICAgICAgICAgICBpZDogZGF0YUNvdW50ZXIrKyxcbiAgICAgICAgfSk7XG4gICAgICAgIHRhc2tDb3VudGVyKys7XG4gICAgICAgIHN0b3JlVGFza3MoY3JlYXRlTmV3UHJvamVjdC50YXNrLCBjcmVhdGVOZXdQcm9qZWN0KTtcblxuICAgICAgICAvL0RPTSBmb3IgZGlzcGxheWluZyB0YXNrc1xuICAgICAgICBjb25zdCBjdXJyZW50VGFza3NEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBjdXJyZW50VGFza3NEaXYuY2xhc3NMaXN0LmFkZChcImN1cnJlbnRUYXNrc1wiKTtcbiAgICAgICAgY3VycmVudFRhc2tzRGl2LnNldEF0dHJpYnV0ZShcImRhdGEtaWRcIiwgdGFza0NvdW50ZXIgLTEpO1xuICAgICAgICAgICAgXG4gICAgICAgIGFkZFRhc2tGb3JtLnZhbHVlID0gXCJcIjtcbiAgICAgICAgY29uc29sZS5sb2coY3JlYXRlTmV3UHJvamVjdCk7XG5cbiAgICAgICAgY29uc3QgZ2V0VGFza0RpdklkID0gY3VycmVudFRhc2tzRGl2LmRhdGFzZXQuaWQ7XG5cbiAgICAgICAgY29uc29sZS5sb2coZ2V0VGFza0RpdklkICsgXCJmb3IgY3VycmVudHRhc2tEaXZcIilcbiAgICAgICAgY3VycmVudFRhc2tzRGl2LmlubmVySFRNTCA9IFxuICAgICAgICAgICAgYFRhc2sgbmFtZTogJHtjcmVhdGVOZXdQcm9qZWN0LmdldERlc2NyaXB0aW9uKClbY3JlYXRlTmV3UHJvamVjdC50YXNrLmxlbmd0aCAtMV19LFxuICAgICAgICAgICAgIHByaW9yaXR5OiAke2NyZWF0ZU5ld1Byb2plY3QuZ2V0UHJpbygpW2NyZWF0ZU5ld1Byb2plY3QudGFzay5sZW5ndGggLTFdfSxcbiAgICAgICAgICAgICBpdCBpcyBkdWUgdGlsbCAke2NyZWF0ZU5ld1Byb2plY3QuZ2V0RHVlRGF0ZSgpW2NyZWF0ZU5ld1Byb2plY3QudGFzay5sZW5ndGggLTFdfWA7XG5cblxuICAgICAgICAvL01hcmtpbmcgYXMgY29tcGxldGVcbiAgICAgICAgY29uc3QgY29tcGxldGVCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xuICAgICAgICBjb21wbGV0ZUJ1dHRvbi5pbm5lckhUTUw9IFwiTWFyayBhcyBjb21wbGV0ZVwiO1xuXG4gICAgICAgIGNvbXBsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKT0+e1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcmVhdGVOZXdQcm9qZWN0LnRhc2subGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKGNyZWF0ZU5ld1Byb2plY3QudGFza1tpXS5pZCA9PSBnZXRUYXNrRGl2SWQpeyBcbiAgICAgICAgICAgICAgICAgICAgaWYoY3VycmVudFRhc2tzRGl2LmNsYXNzTGlzdC5jb250YWlucyhcImNvbXBsZXRlXCIpKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRUYXNrc0Rpdi5jbGFzc0xpc3QucmVtb3ZlKFwiY29tcGxldGVcIilcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFza3NEaXYuY2xhc3NMaXN0LmFkZChcImNvbXBsZXRlXCIpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgLy9EZWxldGluZyBUYXNrc1xuICAgICAgICBjb25zdCBkZWxldGVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKFwiZGVsZXRlVGFza1wiKTtcbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5pbm5lckhUTUwgPSBcIkRlbGV0ZSBUYXNrXCI7XG5cbiAgICAgICAgZGVsZXRlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY3JlYXRlTmV3UHJvamVjdC50YXNrLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBpZihjcmVhdGVOZXdQcm9qZWN0LnRhc2tbaV0uaWQgPT0gZ2V0VGFza0RpdklkKXtcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTmV3UHJvamVjdC50YXNrLnNwbGljZShpLDEpOyAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50VGFza3NEaXYuaW5uZXJIVE1MID0gXG4gICAgICAgICAgICAgICAgICAgIGBUYXNrIG5hbWU6ICR7Y3JlYXRlTmV3UHJvamVjdC5nZXREZXNjcmlwdGlvbigpW2ldfSxcbiAgICAgICAgICAgICAgICAgICAgIHByaW9yaXR5OiAke2NyZWF0ZU5ld1Byb2plY3QuZ2V0UHJpbygpW2ldfSxcbiAgICAgICAgICAgICAgICAgICAgIGl0IGlzIGR1ZSB0aWxsICR7Y3JlYXRlTmV3UHJvamVjdC5nZXREdWVEYXRlKClbaV19YDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXNrRGl2LnJlbW92ZUNoaWxkKGN1cnJlbnRUYXNrc0RpdikgICBcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy9FZGl0aW5nIHRhc2tzXG4gICAgICAgIGNvbnN0IGVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgICAgZWRpdFRhc2tCdXR0b24uaW5uZXJIVE1MID0gXCJFZGl0IE5hbWVcIjtcblxuICAgICAgICBlZGl0VGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCk9PntcbiAgICAgICAgICAgIGxldCBlZGl0VGFza05hbWUgPSBwcm9tcHQoXCJOZXcgVGFzayBuYW1lOlwiKTtcblxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjcmVhdGVOZXdQcm9qZWN0LnRhc2subGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIGlmKGNyZWF0ZU5ld1Byb2plY3QudGFza1tpXS5pZCA9PSBnZXRUYXNrRGl2SWQpe1xuICAgICAgICAgICAgICAgICAgICBjcmVhdGVOZXdQcm9qZWN0LnRhc2tbaV0uZGVzY3JpcHRpb24gPSBlZGl0VGFza05hbWU7XG5cbiAgICAgICAgICAgICAgICAgICAgY3VycmVudFRhc2tzRGl2LmlubmVySFRNTCA9IFxuICAgICAgICAgICAgICAgICAgICBgVGFzayBuYW1lOiAke2NyZWF0ZU5ld1Byb2plY3QuZ2V0RGVzY3JpcHRpb24oKVtpXX0sXG4gICAgICAgICAgICAgICAgICAgICBwcmlvcml0eTogJHtjcmVhdGVOZXdQcm9qZWN0LmdldFByaW8oKVtpXX0sXG4gICAgICAgICAgICAgICAgICAgICBpdCBpcyBkdWUgdGlsbCAke2NyZWF0ZU5ld1Byb2plY3QuZ2V0RHVlRGF0ZSgpW2ldfWA7ICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKGNyZWF0ZU5ld1Byb2plY3QpXG4gICAgICAgIGN1cnJlbnRUYXNrc0Rpdi5hcHBlbmRDaGlsZChjb21wbGV0ZUJ1dHRvbik7XG4gICAgICAgIGN1cnJlbnRUYXNrc0Rpdi5hcHBlbmRDaGlsZChlZGl0VGFza0J1dHRvbik7XG4gICAgICAgIGN1cnJlbnRUYXNrc0Rpdi5hcHBlbmRDaGlsZChkZWxldGVUYXNrQnV0dG9uKTtcbiAgICAgICAgXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjdXJyZW50VGFza3NEaXYpO1xuICAgICAgICBjdXJyZW50VGFza3NEaXYuYXBwZW5kQ2hpbGQoY29tcGxldGVCdXR0b24pO1xuICAgICAgICBjdXJyZW50VGFza3NEaXYuYXBwZW5kQ2hpbGQoZWRpdFRhc2tCdXR0b24pO1xuICAgICAgICBjdXJyZW50VGFza3NEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlVGFza0J1dHRvbik7XG59KVxuIFxuICAgIHRhc2tPcHRpb25zRGl2LmFwcGVuZENoaWxkKGFkZExhYmVsKTtcbiAgICB0YXNrT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG4gICAgdGFza09wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoYWRkTGFiZWxQcmlvKTtcbiAgICB0YXNrT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChhZGRQcmlvRm9ybSk7XG4gICAgdGFza09wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0R1ZURhdGVMYWJlbCk7XG4gICAgdGFza09wdGlvbnNEaXYuYXBwZW5kQ2hpbGQoYWRkVGFza0R1ZURhdGVGb3JtKTtcbiAgICB0YXNrT3B0aW9uc0Rpdi5hcHBlbmRDaGlsZChhZGRCdXR0b24pO1xuICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGFza09wdGlvbnNEaXYpO1xuXG4gICAgcmV0dXJuIHRhc2tEaXY7XG59IiwiZXhwb3J0IGZ1bmN0aW9uIHN0b3JlUHJvamVjdChwcm9qZWN0KSB7XG4gICAgbGV0IGV4aXN0aW5nUHJvamVjdHMgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiUHJvamVjdHNcIikpIHx8IFtdO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIHByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGFscmVhZHkgZXhpc3RzXG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0ID0gZXhpc3RpbmdQcm9qZWN0cy5maW5kKChwcm9qZWN0T2JqKSA9PiB7XG4gICAgICAgIHJldHVybiBwcm9qZWN0T2JqLnByb2plY3ROYW1lID09PSBwcm9qZWN0LnByb2plY3ROYW1lO1xuICAgIH0pO1xuXG4gICAgaWYgKGV4aXN0aW5nUHJvamVjdCkge1xuICAgICAgICAvLyBJZiBhIHByb2plY3Qgd2l0aCB0aGUgc2FtZSBuYW1lIGV4aXN0cywgc2hvdyBhbiBhbGVydCBhbmQgcmV0dXJuXG4gICAgICAgIGFsZXJ0KFwiTmFtZXMgYXJlIHRoZSBzYW1lXCIpO1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBJZiBubyBwcm9qZWN0IHdpdGggdGhlIHNhbWUgbmFtZSBleGlzdHMsIGFkZCB0aGUgbmV3IHByb2plY3RcbiAgICAgICAgZXhpc3RpbmdQcm9qZWN0cy5wdXNoKHByb2plY3QpO1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcIlByb2plY3RzXCIsIEpTT04uc3RyaW5naWZ5KGV4aXN0aW5nUHJvamVjdHMpKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJQcm9qZWN0IGFkZGVkIHN1Y2Nlc3NmdWxseVwiKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVByb2plY3QocHJvamVjdFRvRGVsZXRlKSB7XG5cbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RzXCIpKSB8fCBbXTtcbiAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShleGlzdGluZ1Byb2plY3RzKSk7XG4gICAgY29uc29sZS5sb2coZXhpc3RpbmdQcm9qZWN0cy5sZW5ndGgpXG5cbiAgICAgZm9yKGxldCBpID0gMDsgaSA8IGV4aXN0aW5nUHJvamVjdHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgaWYoZXhpc3RpbmdQcm9qZWN0c1tpXS5wcm9qZWN0TmFtZT09PXByb2plY3RUb0RlbGV0ZS5wcm9qZWN0TmFtZSl7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRlbGV0aW5nIHRoaXNcIilcbiAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdHMuc3BsaWNlKGksIDEpO1xuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1Byb2plY3RzKSlcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdHMpXG4gICAgICAgICB9XG4gICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVByb2plY3ROYW1lKHByb2plY3RUb0VkaXQsIG5ld05hbWVJcyl7XG4gICAgY29uc3QgZXhpc3RpbmdQcm9qZWN0cyA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJQcm9qZWN0c1wiKSkgfHwgW107XG5cbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgZXhpc3RpbmdQcm9qZWN0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGlmKGV4aXN0aW5nUHJvamVjdHNbaV0ucHJvamVjdE5hbWU9PT1wcm9qZWN0VG9FZGl0LnByb2plY3ROYW1lKXtcbiAgICAgICAgICAgIGV4aXN0aW5nUHJvamVjdHNbaV0ucHJvamVjdE5hbWUgPSBuZXdOYW1lSXM7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhleGlzdGluZ1Byb2plY3RzW2ldLnByb2plY3ROYW1lKVxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1Byb2plY3RzKSlcblxuICAgICAgICB9XG4gICAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdG9yZVRhc2tzKHN0b3JlVGFzaywgcHJvamVjdE5hbWUpe1xuICAgIGxldCBleGlzdGluZ1Byb2plY3RzID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIlByb2plY3RzXCIpKSB8fCBbXTtcblxuICAgIC8vIGZvcihsZXQgaSA9IDA7IGkgPCBleGlzdGluZ1Byb2plY3RzLmxlbmd0aDsgaSsrKXtcbiAgICAvLyAgICAgaWYoZXhpc3RpbmdQcm9qZWN0c1tpXS5wcm9qZWN0TmFtZSA9PT0gcHJvamVjdE5hbWUucHJvamVjdE5hbWUpe1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJtYXRjaCBmb3VuZCBhdCBcIilcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKGV4aXN0aW5nUHJvamVjdHNbaV0udGFzaylcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKFwicHVzaGluZ1wiKTtcbiAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHN0b3JlVGFzaylcbiAgICAvLyAgICAgICAgIGV4aXN0aW5nUHJvamVjdHNbaV0udGFzay5wdXNoKHN0b3JlVGFzayk7XG4gICAgLy8gICAgIH1lbHNle1xuICAgIC8vICAgICAgICAgY29uc29sZS5sb2coXCJ3ZSBkb250IG1hdGNoXCIpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgLy8gbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJQcm9qZWN0c1wiLCBKU09OLnN0cmluZ2lmeShleGlzdGluZ1Byb2plY3RzKSk7XG5cbiAgICBjb25zdCBleGlzdGluZ1Byb2plY3QgPSBleGlzdGluZ1Byb2plY3RzLmZpbmQoKHByb2plY3RPYmopID0+IHtcbiAgICAgICAgcmV0dXJuIHByb2plY3RPYmoucHJvamVjdE5hbWUgPT09IHByb2plY3QucHJvamVjdE5hbWU7XG4gICAgfSk7XG59XG5cbiIsImltcG9ydCB7IFByb2plY3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3RvclwiO1xuaW1wb3J0IHsgY3JlYXRlVGFzayB9IGZyb20gXCIuL3Rhc2tzXCI7XG5pbXBvcnQgeyBzdG9yZVByb2plY3QsIGRlbGV0ZVByb2plY3QsIHVwZGF0ZVByb2plY3ROYW1lLCBjaGVja0lmVXNlZH0gZnJvbSBcIi4vc3RvcmFnZVwiO1xuXG5jb25zdCBjb250ZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250ZW50XCIpO1xuY29uc3QgcHJvamVjdE5hbWVGb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJwcm9qZWN0TmFtZVwiKTtcbmNvbnN0IHN1YkJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic3VibWl0XCIpO1xuXG5zdWJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgLy9ET00gZm9yIGFkZGluZyBwcm9qZWN0c1xuICAgIGNvbnN0IHByb2plY3ROYW1lRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBwcm9qZWN0TmFtZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3ROYW1lRGl2XCIpO1xuICAgIGNvbnN0IHByb2plY3RIZWFkbGluZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHByb2plY3RIZWFkbGluZURpdi5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcInByb2plY3RIZWFkbGluZVwiKTtcbiAgICBjb25zdCBwcm9qZWN0SDMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDNcIik7XG4gICAgbGV0IHRoZU5hbWVJcyA9IHByb2plY3ROYW1lRm9ybS52YWx1ZTtcbiAgICBsZXQgY3JlYXRlTmV3UHJvamVjdCA9IG5ldyBQcm9qZWN0KHRoZU5hbWVJcyk7XG5cbiAgICBwcm9qZWN0SDMuaW5uZXJIVE1MID0gYFByb2plY3QgbmFtZTogJHt0aGVOYW1lSXN9YDtcblxuICAgIGNvbnN0IHRhc2tEaXYgPSBjcmVhdGVUYXNrKGNyZWF0ZU5ld1Byb2plY3QpO1xuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7ICAgXG5cbiAgICBjb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdFByb2plY3RCdG4uaW5uZXJIVE1MID0gXCJFZGl0IFByb2plY3RcIjtcblxuICAgIGlmKHN0b3JlUHJvamVjdChjcmVhdGVOZXdQcm9qZWN0KSA9PT1mYWxzZSApe1xuICAgICAgICBjb250ZW50LmFwcGVuZENoaWxkKHByb2plY3ROYW1lRGl2KTtcbiAgICB9O1xuICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKHByb2plY3RIZWFkbGluZURpdik7XG4gICAgcHJvamVjdEhlYWRsaW5lRGl2LmFwcGVuZENoaWxkKHByb2plY3RIMylcbiAgICBwcm9qZWN0SGVhZGxpbmVEaXYuYXBwZW5kQ2hpbGQocmVtb3ZlUHJvamVjdEJ0bik7XG4gICAgcHJvamVjdEhlYWRsaW5lRGl2LmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnRuKTtcbiAgICBwcm9qZWN0TmFtZURpdi5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcblxuICAgIHJlbW92ZVByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsKCk9PntcbiAgICAgICAgY29udGVudC5yZW1vdmVDaGlsZChwcm9qZWN0TmFtZURpdik7XG4gICAgICAgIGRlbGV0ZVByb2plY3QoY3JlYXRlTmV3UHJvamVjdClcbiAgICB9KVxuXG4gICAgZWRpdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpPT57XG4gICAgICAgIGxldCBuZXdOYW1lSXMgPSBwcm9tcHQoXCJlbnRlciBuZXcgcHJvamVjdCBuYW1lOlwiKTtcbiAgICAgICAgdXBkYXRlUHJvamVjdE5hbWUoY3JlYXRlTmV3UHJvamVjdCwgbmV3TmFtZUlzKVxuICAgICAgICBjb25zb2xlLmxvZyhuZXdOYW1lSXMpO1xuICAgICAgICB0aGVOYW1lSXMgPSBuZXdOYW1lSXM7XG4gICAgICAgIGNyZWF0ZU5ld1Byb2plY3QucHJvamVjdE5hbWUgPSB0aGVOYW1lSXM7XG5cbiAgICAgICAgcHJvamVjdEgzLmlubmVySFRNTCA9IGBQcm9qZWN0IG5hbWUgaXM6ICR7dGhlTmFtZUlzfWA7XG4gICAgICAgIHByb2plY3RIMy5hcHBlbmRDaGlsZChyZW1vdmVQcm9qZWN0QnRuKTtcbiAgICAgICAgcHJvamVjdEgzLmFwcGVuZENoaWxkKGVkaXRQcm9qZWN0QnRuKTtcbiAgICB9KVxuICAgIFxuICAgIHByb2plY3ROYW1lRm9ybS52YWx1ZSA9IFwiXCI7XG4gICAgY29uc29sZS5sb2coY3JlYXRlTmV3UHJvamVjdCk7XG59KTtcblxuXG4vL0R1cGxpY2F0ZSBjb2RlIHRvIHNob3cgZGVmYXVsdCBwcm9qZWN0IG9uIHBhZ2UgbG9hZFxud2luZG93Lm9ubG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZGVmYXVsdFByb2plY3QgPSBuZXcgUHJvamVjdChcIkRlZmF1bHQgUHJvamVjdFwiKTtcbiAgICBkaXNwbGF5UHJvamVjdChkZWZhdWx0UHJvamVjdCk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlQcm9qZWN0KHByb2plY3QpIHtcbiAgICBjb25zdCBwcm9qZWN0TmFtZURpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgcHJvamVjdE5hbWVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0TmFtZURpdlwiKTtcbiAgICBjb25zdCBwcm9qZWN0SGVhZGxpbmVEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBwcm9qZWN0SGVhZGxpbmVEaXYuc2V0QXR0cmlidXRlKFwiaWRcIiwgXCJwcm9qZWN0SGVhZGxpbmVcIik7XG4gICAgY29uc3QgcHJvamVjdEgzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgzXCIpO1xuICAgIHByb2plY3RIMy5pbm5lckhUTUwgPSBgUHJvamVjdCBuYW1lIGlzOiAke3Byb2plY3QucHJvamVjdE5hbWV9YDtcblxuICAgIGNvbnN0IHRhc2tEaXYgPSBjcmVhdGVUYXNrKHByb2plY3QpO1xuXG4gICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgcmVtb3ZlUHJvamVjdEJ0bi5pbm5lckhUTUwgPSBcIkRlbGV0ZSBQcm9qZWN0XCI7ICAgXG5cbiAgICBjb25zdCBlZGl0UHJvamVjdEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgZWRpdFByb2plY3RCdG4uaW5uZXJIVE1MID0gXCJFZGl0IFByb2plY3RcIjtcblxuICAgIFxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQocHJvamVjdE5hbWVEaXYpO1xuICAgIHByb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKHByb2plY3RIZWFkbGluZURpdik7XG4gICAgcHJvamVjdEhlYWRsaW5lRGl2LmFwcGVuZENoaWxkKHByb2plY3RIMylcbiAgICAvL3Byb2plY3ROYW1lRGl2LmFwcGVuZENoaWxkKHByb2plY3RIMyk7XG4gICAgcHJvamVjdEhlYWRsaW5lRGl2LmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdG4pO1xuICAgIHByb2plY3RIZWFkbGluZURpdi5hcHBlbmRDaGlsZChlZGl0UHJvamVjdEJ0bik7XG4gICAgcHJvamVjdE5hbWVEaXYuYXBwZW5kQ2hpbGQodGFza0Rpdik7XG5cbiAgICByZW1vdmVQcm9qZWN0QnRuLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgICAgIGNvbnRlbnQucmVtb3ZlQ2hpbGQocHJvamVjdE5hbWVEaXYpO1xuICAgIH0pO1xuXG4gICAgZWRpdFByb2plY3RCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgICAgICAgbGV0IG5ld05hbWVJcyA9IHByb21wdChcIkVudGVyIG5ldyBwcm9qZWN0IG5hbWU6XCIpO1xuICAgICAgICBjb25zb2xlLmxvZyhuZXdOYW1lSXMpO1xuICAgICAgICBwcm9qZWN0LnByb2plY3ROYW1lID0gbmV3TmFtZUlzO1xuICAgICAgICBwcm9qZWN0SDMuaW5uZXJIVE1MID0gYFByb2plY3QgbmFtZSBpczogJHtuZXdOYW1lSXN9YDtcbiAgICAgICAgcHJvamVjdEgzLmFwcGVuZENoaWxkKHJlbW92ZVByb2plY3RCdG4pO1xuICAgICAgICBwcm9qZWN0SDMuYXBwZW5kQ2hpbGQoZWRpdFByb2plY3RCdG4pO1xuICAgIH0pO1xufVxuXG5cblxuXG4iXSwibmFtZXMiOlsiUHJvamVjdCIsImNvbnN0cnVjdG9yIiwicHJvamVjdE5hbWUiLCJ0aGlzIiwidGFzayIsImFkZFRhc2siLCJuZXdUYXNrIiwicHVzaCIsImRpc3BsYXlUYXNrIiwiaW5kZXgiLCJjb25zb2xlIiwibG9nIiwiZ2V0RGVzY3JpcHRpb24iLCJtYXAiLCJkZXNjcmlwdGlvbiIsImdldFByaW8iLCJwcmlvcml0eSIsImdldER1ZURhdGUiLCJkdWVEYXRlIiwiZ2V0SUQiLCJpZCIsImNyZWF0ZVRhc2siLCJjcmVhdGVOZXdQcm9qZWN0IiwiZGF0YUNvdW50ZXIiLCJ0YXNrQ291bnRlciIsInRhc2tEaXYiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJhZGRUYXNrRm9ybSIsInNldEF0dHJpYnV0ZSIsImFkZExhYmVsIiwiaW5uZXJIVE1MIiwiY2xhc3NMaXN0IiwiYWRkIiwiYWRkUHJpb0Zvcm0iLCJvcHRpb25zSGlnaCIsIm9wdGlvbnNUZXh0SGlnaCIsImNyZWF0ZVRleHROb2RlIiwib3B0aW9uc01lZCIsIm9wdGlvbnNUZXh0TWVkIiwib3B0aW9uc0xvdyIsIm9wdGlvbnNUZXh0TG93IiwiYXBwZW5kQ2hpbGQiLCJhZGRMYWJlbFByaW8iLCJhZGRUYXNrRHVlRGF0ZUZvcm0iLCJhZGRUYXNrRHVlRGF0ZUxhYmVsIiwiYWRkQnV0dG9uIiwidGFza09wdGlvbnNEaXYiLCJhZGRFdmVudExpc3RlbmVyIiwidGFza1ZhbHVlIiwidmFsdWUiLCJwcmlvVmFsdWUiLCJkdWVEYXRlVmFsdWUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiZmluZCIsInByb2plY3RPYmoiLCJwcm9qZWN0IiwiY3VycmVudFRhc2tzRGl2IiwiZ2V0VGFza0RpdklkIiwiZGF0YXNldCIsImxlbmd0aCIsImNvbXBsZXRlQnV0dG9uIiwiaSIsImNvbnRhaW5zIiwicmVtb3ZlIiwiZGVsZXRlVGFza0J1dHRvbiIsInNwbGljZSIsInJlbW92ZUNoaWxkIiwiZWRpdFRhc2tCdXR0b24iLCJlZGl0VGFza05hbWUiLCJwcm9tcHQiLCJjb250ZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJwcm9qZWN0TmFtZUZvcm0iLCJwcm9qZWN0TmFtZURpdiIsInByb2plY3RIZWFkbGluZURpdiIsInByb2plY3RIMyIsInRoZU5hbWVJcyIsInJlbW92ZVByb2plY3RCdG4iLCJlZGl0UHJvamVjdEJ0biIsImV4aXN0aW5nUHJvamVjdHMiLCJhbGVydCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJzdG9yZVByb2plY3QiLCJwcm9qZWN0VG9EZWxldGUiLCJkZWxldGVQcm9qZWN0IiwibmV3TmFtZUlzIiwicHJvamVjdFRvRWRpdCIsInVwZGF0ZVByb2plY3ROYW1lIiwid2luZG93Iiwib25sb2FkIiwiZGlzcGxheVByb2plY3QiXSwic291cmNlUm9vdCI6IiJ9