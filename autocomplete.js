let availableKeywords= [
  "HTML",
  "XML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React.js",
  "Next.js",
  "Express.js",
  "Node.js",
  "Vue.js",
  "React Native",
  "Git",
  "Rest API",
  "Tailwind",
  "PHP",
  "MongoDB",
  "PowerBI",
  "Figma",
  "DevOps",
  "Agile",
  "Scrum",
  "MySQL",
  "PostgreSQL",
  "Postman",
  "Jenkins",
  "Linux",
  "Unix",
  "PowerShell",
  "Docker",
  "Kubernetes",
  "Spring Boot",
  "Python",
  "Java",
  "C/C++",
  "Framer Motion",
];

const resultsBox = document.querySelector(".resultbox");
const inputBox = document.getElementById("input-box");

inputBox.onkeyup = function(){
    let result=[];
    let input=inputBox.value;
    if(input.length){
        result = availableKeywords.filter((keyword)=>{
           return keyword.toLowerCase().includes(input.toLowerCase());
        });
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML='';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>"+list+"</li>";
    });

    resultsBox.innerHTML = "<ul>"+content.join('')+"</ul>";
}

function selectInput(list){
    inputBox.value=list.innerHTML;
    resultsBox.innerHTML='';
}