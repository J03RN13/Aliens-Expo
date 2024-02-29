var sortOrders = {};

    function sortNews(key) {
      var newsList = document.getElementById('newsList');
      var listItems = Array.from(newsList.getElementsByTagName('li'));

      if (!sortOrders[key]) {
        sortOrders[key] = 'asc';
      } else {
        sortOrders[key] = sortOrders[key] === 'asc' ? 'desc' : 'asc';
      }

      document.getElementById('titleSortArrow').innerHTML = '';
      document.getElementById('dateSortArrow').innerHTML = '';

      listItems.sort(function(a, b) {
        var aValue = a.querySelector('.' + key).textContent;
        var bValue = b.querySelector('.' + key).textContent;

        
        if (key === 'date') {
          aValue = new Date(aValue);
          bValue = new Date(bValue);
        }

        var compareResult = aValue < bValue ? -1 : aValue > bValue ? 1 : 0;
        var arrowHTML = '';

        if (sortOrders[key] === 'asc') {
          arrowHTML = '&#9650;'; 
        } else {
          arrowHTML = '&#9660;'; 
        }

        
        document.getElementById(key + 'SortArrow').innerHTML = arrowHTML;

        return sortOrders[key] === 'asc' ? compareResult : -compareResult;
      });

      
      newsList.innerHTML = '';

      
      listItems.forEach(function(item) {
        newsList.appendChild(item);
      });
    }

    function searchNews() {
      var input = document.getElementById('searchInput').value.toLowerCase();
      var newsList = document.getElementById('newsList');
      var listItems = Array.from(newsList.getElementsByTagName('li'));

      listItems.forEach(function(item) {
        var title = item.querySelector('.title').textContent.toLowerCase();
        var date = item.querySelector('.date').textContent.toLowerCase();
        var isVisible = title.includes(input) || date.includes(input);

        
        item.style.display = isVisible ? '' : 'none';
      });
    }