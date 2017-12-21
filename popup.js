var keywordBox = document.getElementById('keywordBox');
var phraseButton = document.getElementById('phraseButton');
var exactButton = document.getElementById('exactButton');
var modifiedButton = document.getElementById('modifiedButton');

phraseButton.addEventListener('click', function() {
     keywordBox.value = ('"' + keywordBox.value + '"'); 
     keywordBox.value = keywordBox.value.replace(/\n/g, '"\n"');
  });
  
exactButton.addEventListener('click', function () {
     keywordBox.value = ('[' + keywordBox.value + ']'); 
     keywordBox.value = keywordBox.value.replace(/\n/g, ']\n[');
  });
  
modifiedButton.addEventListener('click', function () {
     keywordBox.value = keywordBox.value.replace(/^/gm, "+")
     keywordBox.value = keywordBox.value.replace(/ /g, ' +')
  });
  
  