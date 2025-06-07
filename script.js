const announcements = document.querySelectorAll('.announcement');
let current = 0;

function showNextAnnouncement() {
  announcements[current].classList.remove('active');
  current = (current + 1) % announcements.length;
  announcements[current].classList.add('active');
}

setInterval(showNextAnnouncement, 6000); // change every 4 seconds
