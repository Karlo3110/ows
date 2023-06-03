export default function hoverAnimations($) {
  $(".learn-more-reverse > i").mouseout(function () {
    $(this).addClass(".learn-more-reverse");
  });
}
