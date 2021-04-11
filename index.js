var questions = ["who will win today's Match?", "Who Will be the man of the match?", "Who will Score maximum runs?", "Who will take maximum wickets?", "Who will hit maximum sixes?"]

var solved = []


function choose_random() {
    return Math.floor(Math.random() * 5);
}

function a_in_solved(number, solved) {
    for (var i = 0; i < solved.length; i++)
        if (number == solved[i])
            return true;
    return false;
}

function verify_userdata() {
    var data = document.getElementById("inpbox").value;
    var spcntr = 0
    for (var i = 0; i < data.length; i++) {
        if (!((data[i] >= 'a' && data[i] <= 'z') || (data[i] >= 'A' && data[i] <= 'Z') || data[i] == ' ')) {
            return false;
        }
        if (data[i] == ' ')
            spcntr += 1;
    }
    if (spcntr >= 2)
        return false;

    return true;
}

function handler() {
    if (!verify_userdata()) {
        alert('data not correct');
        return;
    }
    if (document.getElementById("inpbox").value.length < 3 && !document.getElementById("inpbox").disabled) {
        alert("you should probabely use verified data.");
        return;
    }
    document.getElementById("inpbox").disabled = false;
    if (solved.length == 5) {
        alert("You've answerd all the questions please wait for results.")
    } else {
        while (true) {
            var newnum = choose_random();
            if (!a_in_solved(newnum, solved)) {
                var ques = document.getElementById("question");
                solved.push(newnum);
                ques.innerHTML = questions[newnum];
                document.getElementById("inpbox").value = '';
                console.log(newnum);
                console.log(questions[newnum]);
                break;
            }
        }
    }
}

var names = ["Piyush Mishra", "Hemant Sharma", "Nested Astra", "Golgappa Bhandar", "Annawali wala Anna", "Saket Mishra", "Guddu King", "Desert Eagle"]
var prices = ["1000", "2000", "1340", "2182", "780", "2318", "567", "235"]
var team1 = ["MI", "CSK", "DC", "KXIP", "SRH", "RCB", "RR", "KKR"]
var team2 = ["RCB", "RR", "KKR", "MI", "KXIP", "DC", "CSK", "SRH"]

function foo() {
    var num = Math.floor(Math.random() * 8);
    document.getElementById("wname").innerHTML = names[num];
    document.getElementById("price").innerHTML = prices[num] + "/-";
    document.getElementById("fteam").innerHTML = team1[num];
    document.getElementById("steam").innerHTML = team2[num];
}

setInterval(function() {
    foo()
}, 17100)