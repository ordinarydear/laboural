const question = {
    openQuestion: "เลือกปัญหาของท่าน",
    
    category1: "ลูกจ้างทำงานครบ 120 วันขึ้นไป",
    category1_yes: "ลูกจ้างถูกเลิกจ้างด้วยกรณีต่อไปนี้",
    category1_yes_choice1: "ลูกจ้างมีพฤติกรรมอย่างใดอย่างหนึ่งต่อไปนี้<br><p style='font-weight: 400; text-align: left; padding: 0 10%; line-height: 2;'>\n1) ทุจริต/ทำผิดอาญาต่อนายจ้าง<br>\n2) จงใจทำให้นายจ้างได้รับความเสียหาย<br>\n3) ประมาทเลินเล่อเป็นเหตุุให้นายจ้างได้รับความเสียหายอย่างร้ายแรง<br>\n4) ฝ่าฝืน/กฎ/ระเบียบ/คำสั่ง โดยชอบด้วยกฎหมายของนายจ้าง<br>\n5) ละทิ้งหน้าที่ 3 วันติดต่อกันโดยไม่มีเหตุผลที่สมควร<br>\n6) ได้รับโทษจําคุกตามคําพิพากษาถึงที่สุดให้จําคุก ถ้าเป็นความผิดที่ได้กระทําโดยประมาท <br>หรือความผิดลหุโทษเป็นกรณีที่เป็นเหตุให้นายจ้างได้รับความเสียหาย</p>",
    category1_yes_choice1_yes: "นายจ้างได้แจ้งสาเหตุที่เลิกจ้างให้ลูกจ้างทราบในขณะที่เลิกจ้าง <br>หรือระบุข้อเท็จจริงที่เป็นสาเหตุของการเลิกจ้างไว้ในหนังสือบอกเลิกสัญญาจ้าง",

    category2: "ลูกจ้างได้คัดค้านการลดค่าจ้าง"
}

const result = {
    openQuestion_choice4: "สามาถทำได้ เป็นการตกลงกันเพื่อเปลี่ยนแปลงเนื้อหาในสัญญาจ้างแรงงานเกี่ยวกับสถานที่ทำงาน วันและเวลาทำงาน ซึ่งหากลูกจ้างตกลงยินยอมด้วยก็มีผลเป็นการแก้ไขสัญญา *ทั้งนี้ความยินยอมดังกล่าวไม่ต้องทำเป็นหนังสือก็ใช้ได้ เพราะสัญญาจ้าแรงงาน กฎหมายไม่ได้กำหนดแบบไว้ การแก้ไขสัญญาจึงไม่มีแบบเช่นกัน",
    
    category1_no: "ลูกจ้างไม่มีสิทธิได้รับค่าชดเชย",
    
    category1_yes_choice2: "ในกรณีทั่วไปลูกจ้างมีสิทธิได้รับค่าชดเชย",
    category1_yes_choice3: "ลูกจ้างมีสิทธิได้รับค่าชดเชย",
    category1_yes_choice4: "ถือว่าเป็นการเลิกจ้าง ลูกจ้างมีสิทธิได้รับค่าชดเชยตั้งแต่วันที่นายจ้างไม่สามารถดำเนินกิจการต่อไปได้",
    category1_yes_choice5: "ปรึกษาทนายความ",

    category1_yes_choice1_no: "ลูกจ้างมีสิทธิได้รับค่าชดเชย",
    category1_yes_choice1_yes_yes: "นายจ้างไม่ต้องจ่ายค่าชดเชย",
    category1_yes_choice1_yes_no: "ลูกจ้างมีสิทธิได้รับค่าชดเชยตามกฎหมาย และนายจ้างไม่สามารถนำเหตุผลข้างตนยกขึ้นกล่าวอ้างภายหลังได้",

    category2_yes: "กรณีที่เปลี่ยนสถานที่ทำงานจากในสถานประกอบการมาให้ทำงานที่บ้านและเปลี่ยนแปลงค่าจ้าง เป็นการที่นายจ้างต้องการเปลี่ยนแปลงเนื้อหาในสัญญาจ้างแรงงาน ซึ่งจะต้องได้รับความยินยอมจากลูกจ้างก่อน กรณีนี้ถ้าภายหลังลูกจ้างไม่ยินยอมให้ลดค่าจ้าง จะมีผลเท่ากับนายจ้างเลิกจ้าง นายจ้างมีหน้าที่ต้องจ่ายค่าชดเชย",
    category2_no: "ถือเป็นการที่ลูกจ้างตกลงยินยอมเพื่อเปลี่ยนแปลงเนื้อหาในสัญญาจ้างแรงงาน ซึ่งหากทั้งสองฝ่ายยินยอม (Mutual Agreement) ก็สามารถทำได้ ทั้งนี้ความยินยอมดังกล่าวไม่จำเป็นต้องทำเป็นหนังสือก็ใช้ได้ เพราะสัญญาจ้าแรงงาน กฎหมายไม่ได้กำหนดแบบไว้ การแก้ไขสัญญาจึงไม่มีแบบเช่นกัน",



}


class Question {
    constructor(text, choice) {
      this.text = text;
      this.choice = choice;
    }
  }

class Choice{
    constructor(text, nextQuestion){
        this.text = text;
        this.nextQuestion = nextQuestion;
    }
}


const category2 = new Question(question.category2 , new Array(new Choice("ใช่", result.category2_yes), new Choice("ไม่ใช่", result.category2_no), "no", "", ""));

const category1_yes_choice1_yes = new Question(question.category1_yes_choice1_yes, new Array(new Choice("ใช่", result.category1_yes_choice1_yes_yes), new Choice("ไม่ใช่", result.category1_yes_choice1_yes_no), "no", "", ""));

const category1_yes_choice1 = new Question(question.category1_yes_choice1, new Array(new Choice("ใช่", category1_yes_choice1_yes), new Choice("ไม่ใช่", result.category1_yes_choice1_no), "no", "", ""));

const category1_yes = new Question(question.category1_yes, new Array(new Choice("ถูกเลิกจ้างโดยชัดแจ้งด้วยวาจาหรือทำเป็นหนังสือ", category1_yes_choice1), new Choice("สัญญาจ้างสิ้นสุดตามกำหนดเวลา", result.category1_yes_choice2),
new Choice("อายุครบ 60 ปี หรือเกษียณอายุตามข้อกำหนดของนายจ้าง" ,result.category1_yes_choice3), new Choice("นายจ้างไม่ได้แสดงเจตนาเลิกจ้าง แต่ลูกจ้างไม่ได้ทำงานและไม่ได้รับค่าจ้าง <br>เพราะเหตุที่นายจ้างไม่สามารถดำเนินกิจการต่อไป <br>(เช่น นายจ้างล้มละลาย หรือถูกเพิกถอนใบอนุญาตประกอบธุรกิจ) ", result.category1_yes_choice4), 
new Choice("ไม่เข้า 4 กรณีข้างต้น", result.category1_yes_choice5)))


const category1 = new Question(question.category1, new Array(new Choice("ใช่", category1_yes), new Choice("ไม่ใช่", result.category1_no), "no", "", ""));

const openQuestion = new Question(question.openQuestion, 
                                new Array(new Choice("ถูกเลิกจ้าง", category1), 
                                new Choice("ถูกลดค่าจ้าง", category2), 
                                new Choice("การทำงานล่วงเวลา", ""), 
                                new Choice("นายจ้างให้ work from home", result.openQuestion_choice4openQuestion_choice4), 
                                new Choice("COVID-19 : กักตัว, เป็นกลุ่มเสี่ยง, หรือได้รับเชื้อ", "")))





var currentQuetion = openQuestion;

function next(choicePick){

    let choiceBtn = document.getElementsByClassName("choices");
    let questionText = document.getElementById("question-text");
    console.log("questionText" , questionText)
    
    for (let i = 0; i < 5; i++){
        if (choicePick == i){
            currentQuetion = currentQuetion.choice[i].nextQuestion;
            console.log("currentQuetion" ,currentQuetion)
            console.log("currentQuetion.text" ,currentQuetion.text)
            if (typeof currentQuetion == "string"){
                showResult(currentQuetion);
                return;
            }
            break;
        }
    }
    
    questionText.innerHTML = currentQuetion.text;

    if (currentQuetion.choice[2] == "no"){
        choiceBtn[0].innerHTML = currentQuetion.choice[0].text;
        choiceBtn[1].innerHTML = currentQuetion.choice[1].text;
        choiceBtn[2].style.display = "none";
        choiceBtn[3].style.display = "none";
        choiceBtn[4].style.display = "none";
    } else {
        for (i = 0; i < 5; i++){
            choiceBtn[i].style.display = 'block';
            choiceBtn[i].innerHTML = currentQuetion.choice[i].text;
        }

    }

}

function showResult(resultText) {

    console.log("result", currentQuetion);
    document.getElementById("result-page").style.display = "flex";
    document.getElementById("result-text").innerHTML = resultText;
    document.getElementById("question-page").style.display = "none";
    
}



function enableStartBtn() {
    var checkBox1 = document.getElementById("check1");
    var checkBox2 = document.getElementById("check2");
    

    if (checkBox1.checked == true && checkBox2.checked == true) {
        document.getElementById("start-btn").classList.add("-active");
    } else {
        document.getElementById("start-btn").classList.remove("-active");
    }

}

function startQuestions(){
    var questionPage = document.getElementById("question-page");
    var agreementCtn = document.getElementById("agreement-ctn");
    questionPage.style.display = "flex";
    agreementCtn.style.display = "none";
}


