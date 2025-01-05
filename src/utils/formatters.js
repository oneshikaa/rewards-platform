export const formatPoints = (points) => {
    return new Intl.NumberFormat().format(points);
  };
  
  export const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };