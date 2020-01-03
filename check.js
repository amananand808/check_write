


var app = angular.module("myApp", []);

    app.controller("myCtrl", function($scope){
        $scope.arr1 = ["", "one", "two", "three", "four", "five", "six", "seven", 
        "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen",
        "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"] 

    $scope.arr2 = ["", "", "twenty", "thirty", "fourty", "fifty", "sixty", "seventy", "eighty", "ninety"] 

    $scope.f1=function(val,suffix){
        
        if($scope.val>19 ){
        return  " " +$scope.arr2[Math.floor(val / 10)] + " " +$scope.arr1[(val % 10)]+suffix+ " ";
        }
        else{
        return $scope.arr1[val]+ " " + suffix + " ";
        }
    }

    $scope.f2=function(num1){  
        
        $scope.str= num1.toString();
        $scope.number= $scope.str.split(".");
        $scope.val= parseInt($scope.number[0]);
    
        $scope.m = " "+$scope.f1(($scope.val % 100), "")

        if ($scope.val > 100 && $scope.val % 100) { 
            $scope.m = ""+" and "+$scope.m ; 
        } 
        
        $scope.m = " "+$scope.f1((Math.floor($scope.val / 100) % 10), " Hundred" )+ $scope.m;    
        $scope.m = " "+$scope.f1((Math.floor($scope.val / 1000) % 100), " Thousand") + $scope.m; 
        $scope.m = " "+$scope.f1((Math.floor($scope.val / 100000) % 100), " lakh") + $scope.m; 
        $scope.m = " "+$scope.f1((Math.floor($scope.val / 10000000) % 100), " Crore") + $scope.m; 
        $scope.m =" "+ $scope.f1((Math.floor($scope.val / 1000000000) % 100), " Billion") + $scope.m; 
        
    
    
        if ($scope.number.length > 1) { 
            $scope.decimal = "1" 
        for (var i = 0; i < $scope.number[1].length; i++) { 
            $scope.decimal += "0";     
        } 
        $scope.m = $scope.m + " and " + $scope.number[1] + "/" + $scope.decimal 
        }
        else{
            $scope.m=""+$scope.m+" only "+" ";
        }
    
        console.log($scope.m);
        

    }
});




