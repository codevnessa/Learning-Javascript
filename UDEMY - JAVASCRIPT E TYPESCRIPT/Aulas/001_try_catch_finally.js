function returnTime(date){
    if (date && !(date instanceof Date)){
        throw new TypeError('Esperando instancia de Date');
    }

    if(!date){
        data = new Date();
    }
    return data.toLocaleTimeString('pt-BR',{ 
        hour: '2-digit',
        minute:  '2-digit',
        hour12: false
    });

};

function greeting(){
    const now = new Date();
    const hour = now.getHours();
    if(hour >= 5 && hour < 12){
        return "Good Morning! Have a greet day!";
    }else if(hour >= 12 && hour < 18){
        return "Good afternoon! Enjoy your day!";
    }else {
        return "Good evening! Have a good rest!"
    }

}

try{
    const hora = returnTime();
    console.log(hora)
    console.log(greeting())
}catch(e){
    console.log(e)
}finally{
    console.log("Execution finished.");
}


