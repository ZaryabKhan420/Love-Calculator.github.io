
function love()
{
    const name = document.querySelector('#name').value;
    const loverName = document.querySelector('#loverName').value;
    let Result = document.querySelector('#Result');
        if(name!="" && loverName!="")
        {
            var loveValue = Math.random();
            loveValue = loveValue * 100; 
            Result.innerHTML = (Math.round(loveValue) + "%");
        }
}
