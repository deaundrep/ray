const Ray = function() {
const newRay = {
    length : 0,

    push : function(value){
        this[this.length] = value
        this.length++
    },

    pop : function(){
        const lastIndex = this.length - 1;
        const toBeRemoved = this[lastIndex];
        delete this[lastIndex];
        this.length--;

        return toBeRemoved;
    },

    includes : function(value){
        for(let i = 0; i < this.length; i++){
            if (this[i] === value){
                return true;
            }
        }
        return false
    },

    indexOf : function(value){
        for(let i = 0; i < this.length; i++){
            if (this[i] === value){
                return i;
            }
        }
        return  - 1
    },

    shift : function(){
        const shifts = this[0];

        for(let i = 0; i < this.length; i++){
            this[i] = this[i + 1];
        }
        delete this[this.length -1];
        this.length--;
        return shifts;

    },

    unshift: function(value){
        for(let i = this.length; i >=1; i--){
            this[i] = this[i - 1];
        }
        this[0] = value

        return this.length++
    },
}
return newRay
}


module.exports = Ray
