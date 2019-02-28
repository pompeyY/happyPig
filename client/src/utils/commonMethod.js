
    export function setStateCom(key, val, that) {
        that.setState({
            [key]: val
        })
    }
    export function judNull(param) {
        if (param) {
            const jud = Object.values(param).some((item) => {
                return item === ''
            })
            return jud
            // 空-true，无空-false
        }
    }