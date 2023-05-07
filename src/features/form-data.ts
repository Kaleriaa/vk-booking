export const formData = (currentTarget: HTMLFormElement) => {
    const formData = new FormData(currentTarget)
    const formDataObj: Record<string, FormDataEntryValue> = {}

    formData.forEach((value, key) => {
        formDataObj[key] = value
    })
    return formDataObj
}
