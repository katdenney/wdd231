export function getTimeStamp(){
const timestamp = document.getElementById('timestamp');
if (timestamp) {
  timestamp.value = new Date().toISOString();
}
};