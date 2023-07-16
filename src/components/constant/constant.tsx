
export const arrayOfYears: number[] = [];
export const arrayOfCategory: string[] = ["che","eco","lit","pea","phy","med"];
for(let i = 1901; i < new Date().getFullYear(); i++) {
    arrayOfYears.push(i);
}
