function go_to_input()
{
  // scroll down
  window.scrollBy(0, 1500);
}

function enable_result()
{

  // enable result part.
  document.getElementById("main_content_container").style.height = '300%';
  document.getElementById("result_area").style.height = '33.3%';
  document.getElementById("input_area").style.height = '33.3%';
  document.getElementById("introduction_area").style.height = '33.3%';

  //
  document.getElementById("result_area").innerHTML = hidden_result.innerHTML;
  window.scrollBy(0, 1000);
  // scroll down.
}
