/**
 * Created by James Cheng on 12/13/2013.
 */
//this test assume today is Dec,1,2013.
describe("Test Date extension Library", function () {

    var testDay = new Date(2013,11,13,0,0,0);
    console.log(testDay.toString());
    describe( "Check Date.prototype.DAYSOFWEEK include all week days", function () {
        it("Check if includes Monday", function () {
            expect( (new Date()).DAYSOFWEEK ).toContain('Monday');
        });
        it("Check if includes Tuesday", function () {
            expect( (new Date()).DAYSOFWEEK ).toContain('Tuesday');
        });
        it("Check if includes Wednesday", function () {
            expect( (new Date()).DAYSOFWEEK ).toContain('Wednesday');
        });
        it("Check if includes Thursday", function () {
            expect( (new Date()).DAYSOFWEEK ).toContain('Thursday');
        });
        it("Check if includes Friday", function () {
            expect( (new Date()).DAYSOFWEEK ).toContain('Friday');
        });
        it("Check if includes Saturday", function () {
            expect( (new Date()).DAYSOFWEEK ).toContain('Saturday');
        });
        it("Check if includes Sunday", function () {
            expect( (new Date()).DAYSOFWEEK ).toContain('Sunday');
        });

    });

    describe( "Check Date.prototype.Date.prototype.MONTHSOFYEAR include all Months", function () {
        it("Check if includes January", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('January');
        });
        it("Check if includes February", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('February');
        });
        it("Check if includes March", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('March');
        });
        it("Check if includes April", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('April');
        });
        it("Check if includes May", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('May');
        });
        it("Check if includes June", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('June');
        });
        it("Check if includes July", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('July');
        });
        it("Check if includes August", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('August');
        });
        it("Check if includes September", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('September');
        });
        it("Check if includes October", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('October');
        });
        it("Check if includes November", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('November');
        });
        it("Check if includes December", function () {
            expect( (new Date()).MONTHSOFYEAR ).toContain('December');
        });

    });

    describe("Check the getDayWord returns correct day word",function(){

        it("Check if today is Friday", function () {
            expect( testDay.getDayWord() ).toEqual('Friday'); //today is Friday.
        });
    })

    describe("Check the getMonthWord returns correct month word",function(){

        it("Check if this month is Dec", function () {
            expect( testDay.getMonthWord() ).toEqual('December'); //This month is Dec.
        });
    })
    describe("Check the get month starts returns correct first day of current month",function(){

        it("Check if first day of this month is Dec/1/2013", function () {
            expect( testDay.getMonthStart() ).toEqual(new Date('2013-12-1')); //This month is Dec.
        });
    })
    describe("Check the get month ends returns correct first day of current month",function(){

        it("Check if last day of this month is Dec/1/2013", function () {
            expect( testDay.getMonthEnd() ).toEqual(new Date(2013,11,31,0,0,0)); //This month is Dec.
        });
    })

    describe("Check the get week starts returns correct first day of current week",function(){

        it("Check if first day of this week is ", function () {
            expect( testDay.getWeekStart() ).toEqual(new Date(2013,11,8,0,0,0)); //This Weed start from Dec-8.
        });
    })
    describe("Check the get week ends returns correct first day of current week",function(){

        it("Check if end day of this week is ", function () {
            expect( testDay.getWeekEnd() ).toEqual(new Date(2013,11,14,0,0,0)); //This Weed start from Dec-8.
        });
    })
    describe("Check the getDelimDate function",function(){

        it("Check if getDelimDate works with single digit input ", function () {
            expect( testDay.getDelimDate() ).toEqual('2013_12_13'); //This Weed start from Dec-8.

        });
    })

});
