class Formatter {
    static formatAmount(amount, config) {
        let finalConfig = Object.assign({}, this.DEFAULT_AMOUNT_CONFIG, config);
        let parts;
        
        if (finalConfig.decimals === false) {
            parts = [
                amount.toFixed(0),
                null
            ];
        } else {
            parts = amount.toFixed(2).split(/[.,]/);
            if (parts[1] === "00") {
                parts[1] = null;
            }
        }
        
        let prefix = "";
        if (parts[0].startsWith("-")) {
            prefix = parts[0].substr(0, 1);
            parts[0] = parts[0].substr(1);
        }
        
        let pointer = parts[0].length;
        let str = "";
        while (pointer > 0) {
            let len = Math.min(3, pointer);
            
            str = parts[0].substr(pointer - len, pointer) + str;
            
            pointer -= len;
            
            if (pointer > 0) {
                str = finalConfig.groupSep + str;
            }
        }
        
        if (parts[1]) {
            str += finalConfig.decSep + parts[1];
        }
        
        str = finalConfig.prefix + prefix + str + finalConfig.suffix;
        
        return str;
    }
}

Formatter.DEFAULT_AMOUNT_CONFIG = {
    decimals: undefined,
    groupSep: ' ',
    decSep: ',',
    prefix: '',
    suffix: ' Kč'
};

export default Formatter;