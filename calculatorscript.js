function appendToDisplay (value)
{
    const display = document.getElementById('result');
    display.value +=value;
}

function calculateanswer()
{
    const display = document.getElementById('result');
    try
    {
        display.value = eval(display.value.replace('x', '*').replace ('÷', '/'));
    } catch (e)
    {
        display.value = 'Error';
    }
}

function Delete()
{
    const display = document.getElementById('result');
    display.value = display.value.slice(0, -1);
}

function CLEAR()
{
    document.getElementById('result') = " ";
    display.value = ' ';
}