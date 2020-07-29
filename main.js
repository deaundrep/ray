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

    shift : function(value){
        const shifts = this.length
        const lastIndex = this.length - 1; 
        delete this[lastIndex];
        this[this.length]
        this.length--
        return shifts;

    },

    unshift: function(value){
        this[this.length] = value;
        this.length ++;
    },
}
return newRay
}


module.exports = Ray
