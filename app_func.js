window.onload = function()
{
  document.getElementById("main_content").innerHTML =
    document.getElementById("hidden_home").innerHTML;
}

var resultEnabled = false;

function home()
{
  document.getElementById("main_content").innerHTML =
  document.getElementById("hidden_home").innerHTML;

  if(resultEnabled)
  {
    document.getElementById("main_content_container").style.height = '300%';
    document.getElementById("result_area").style.height = '33.33%';
    document.getElementById("input_area").style.height = '33.33%';
    document.getElementById("introduction_area").style.height = '33.33%';
  }
  else
  {
    document.getElementById("main_content_container").style.height = '200%';
    document.getElementById("result_area").style.height = '0%';
    document.getElementById("input_area").style.height = '50%';
    document.getElementById("introduction_area").style.height = '50%';
  }
}

function help()
{
  if(resultEnabled)
  {
    document.getElementById("hidden_home").innerHTML =
      document.getElementById("main_content").innerHTML;
  }
  document.getElementById("main_content").innerHTML =
    document.getElementById("hidden_help").innerHTML;
}

function about()
{
  if(resultEnabled)
  {
    document.getElementById("hidden_home").innerHTML =
      document.getElementById("main_content").innerHTML;
  }
  document.getElementById("main_content").innerHTML =
    document.getElementById("hidden_about").innerHTML;
}

function hide_intro_button()
{
  var element = document.getElementById("intro_button");
  if(element != undefined) {
    element.parentNode.removeChild(element);
  }
}

function go_to_input()
{
  window.scroll({top:1100,left:0,behavior:'smooth'});
  hide_intro_button();
}

function enable_result()
{
  resultEnabled = true;
  hide_intro_button();
  document.getElementById("main_content_container").style.height = '300%';
  document.getElementById("result_area").style.height = '33.3%';
  document.getElementById("input_area").style.height = '33.3%';
  document.getElementById("introduction_area").style.height = '33.3%';

  document.getElementById("result_area").innerHTML = hidden_result.innerHTML;
  window.scroll({top:2000,left:0,behavior:'smooth'});
}
