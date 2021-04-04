// Code your solutions in this file

function  writeCards(name)
{
  const names = [];
  for(let i = 0; i < name.length; i++)
  {
    names.push("Thank you, " + name[i] + ", for the wonderful surprise gift!");
  }
  return names;
}

function countDown(num)
{
  for(let i = num; i > -1; i--)
  {
    console.log(i);
  }
}




