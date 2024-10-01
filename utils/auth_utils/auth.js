const handleFormSubmission = (e, stateInfo)=>{
    e.preventDefault()
    console.log("state info before submitting form to the backend... ", stateInfo)
    let payload = {
        ...stateInfo
    }
    console.log(payload)
    // make a call to the backend for the form submission
}

function handleInput(e, stateSetter){
    let element = e.target
    stateSetter((prevState) => ({
        ...prevState,
        [element.name]: element.value
    }))
}

module.exports = {
    handleFormSubmission,
    handleInput
}
