
export const debounce = (func: { apply: (arg0: any, arg1: IArguments) => void }, wait: number , immediate: boolean) => {
    let timeout: NodeJS.Timeout | null
    return function () {
        // @ts-ignore
        const context = this
        const args = arguments
        const later = function () {
            timeout = null
            if (!immediate) {
                func.apply(context, args)
            }
        }
        const callNow = immediate && !timeout
        clearTimeout(timeout as NodeJS.Timeout)
        timeout = setTimeout(later, wait)
        if (callNow) {
            func.apply(context, args)
        }
    }
}
