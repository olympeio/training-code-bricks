import { FunctionBrick, registerBrick } from 'olympe';

export default class RepeatString extends FunctionBrick {

    /**
     * Executed every time an input (s, n) gets updated.
     * Note that this method will _not_ be executed if an input value is undefined.
     * 
     * @protected
     * @param {!Context} context
     * @param {string} s
     * @param {number} n
     * @param {function(string)} setRepeatedS
     * @param {function(number)} setLength
     */
    onUpdate(context, [s, n], [setRepeatedS, setLength]) {
        const repeatedS = s.repeat(n);
        setRepeatedS(repeatedS);
        setLength(repeatedS.length);
    }
}

registerBrick('017d6c31f458701c8f99', RepeatString);
