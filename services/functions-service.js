class testAlan {
    first(steps) {
        if (steps.length < 10) {
            return false;
        } else {

            let n = 0;
            let s = 0;
            let e = 0;
            let w = 0;

            steps.forEach(step => {
                switch (step) {
                    case 'n':
                        n++;
                        break;
                    case 's':
                        s++;
                        break;
                    case 'e':
                        e++;
                        break;
                    case 'w':
                        w++;
                        break;
                }
            })
            if (n == s) {
                if (e == w) {
                    return true;
                } else {
                    return false;
                }
            } else {
                return false;

            }
        }
    }

    second(numbers) {

        let pares = 0;
        let inpares = 0;
        let lastPar = 0;
        let lastInpar = 0;
        let outlier = 0;

        numbers.forEach(num => {
            if (num % 2 === 0) {
                pares++;
                lastPar = num;
            } else {
                inpares++;
                lastInpar = num;
            }

            if (pares >= 2 && inpares == 1) {
                outlier = lastInpar;
            } else if (inpares >= 2 && pares == 1) {
                outlier = lastPar;
            }
        });

        return outlier;
    }
}

module.exports = testAlan;