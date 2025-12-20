function getFormattedDate(parameter_date:any){
    const date = new Date(parameter_date); 
    return date.toLocaleString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

function getAdjacentElements(arr: any[], currentElement:any) {
  const currentIndex = arr.indexOf(currentElement);
  
  if (currentIndex === -1) {
    return { previous: null, next: null };
  }
  
  return {
    previous: currentIndex > 0 ? arr[currentIndex - 1] : null,
    next: currentIndex < arr.length - 1 ? arr[currentIndex + 1] : null
  };
}

export {getFormattedDate, getAdjacentElements};