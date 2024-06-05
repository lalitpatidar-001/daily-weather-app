export default function formatDate(dateString) {
    if(!dateString) return
    const options = { weekday: 'short', day: 'numeric', month: 'short' };
    const formattedDate = new Date(dateString).toLocaleDateString('en-US', options);
    return formattedDate;
  }

