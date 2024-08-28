export const displayOtherNavs = (e)=>{
    let otherNavParent = document.querySelector(".other-navs")
    otherNavParent.classList.toggle("hidden")
}

export const redirectRoute = (navigator, route) =>{
    /**redirects to the right component through the 
     * `route`, using the `navigator`
     * */
    console.log(`a click to redirect to ${route}`)
    navigator(route)
}