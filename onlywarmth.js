window.addEventListener("scroll", function () {
  var scrollHeight = document.documentElement.scrollHeight;
  var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  var clientHeight = document.documentElement.clientHeight;
  var scrollPercent = (scrollTop / (scrollHeight - clientHeight)) * 100;
  document.getElementById("scroll-bar").style.height = scrollPercent + "vh";
  document.getElementById("scroll-text").firstChild.nodeValue = (
    (42.195 * scrollPercent) /
    100
  ).toFixed(2);
});
