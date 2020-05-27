// Using 1st element as pivot
const quickSort = async (low,high)=>{
    // Partitioning the array
    if(low>=high) return;
    // let a = document.getElementById(low).style.height.slice(0,-2);
    let pos=low;

    for(let i=low+1;i<high;i++){
        showPicked(low, i);
        let promise = new Promise(async(resolve, reject) => {
            setTimeout(() => resolve("done!"), 2000/n)
        });
        result = await promise

// console.log(document.getElementById(pos).style.height.slice(0,-2) , document.getElementById(i).style.height.slice(0,-2));
        if(Number(document.getElementById(pos).style.height.slice(0,-2)) > Number(document.getElementById(i).style.height.slice(0,-2))){
            // console.log(pos);
            // swapById(pos,i);
            // swapById(pos+1,i);
            tmp=document.getElementById(pos).style.height;
            document.getElementById(pos).style.height = document.getElementById(i).style.height;
            document.getElementById(i).style.height = tmp;

            
            tmp=document.getElementById(pos+1).style.height;
            document.getElementById(pos+1).style.height = document.getElementById(i).style.height;
            document.getElementById(i).style.height = tmp;
            pos++;
        }
        // if(arr[pos]>arr[i]){
        //     tmp=arr[pos];
        //     arr[pos]=arr[i];
        //     arr[i]=tmp;

        //     tmp=arr[pos+1];
        //     arr[pos+1]=arr[i];
        //     arr[i]=tmp;
        //     pos++;
        // }
        remPicked(low,i);
    }
    correctPos(pos);
    quickSort(low,pos);
    quickSort(pos+1,high);
    // Debugging 

    // let ap=[]
    // for(i=0;i<9;i++){
    //     ap.push(document.getElementById(i).style.height.slice(0,-2));
    // }
    // console.log(ap);
}