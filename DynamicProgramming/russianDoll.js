var maxEnvelopes = function(envelopes) {
    var n = envelopes.length;
    
    // sort by width
    envelopes.sort((a,b)=>a[0] === b[0] ? b[1]-a[1] : a[0]-b[0]);

    // lis
    var dp = [envelopes[0][1]];
    for(var i = 1; i<n; i++)
    {
        var target = envelopes[i][1];
        var l =0 ;
        var r = dp.length;
        while(l<r)
        {
            var mid = Math.floor((l+r)/2);
            if(dp[mid] < target)
            {
                l = mid+1;
            }
            else
            {
                r= mid;
            }
        }
        if(l>=0)
        {
            dp[l] = target;
        }
    }
    return dp.length;
};


let envelopes = [[4,5],[4,6],[6,7],[2,3],[1,1]];
console.log(maxEnvelopes(envelopes));
