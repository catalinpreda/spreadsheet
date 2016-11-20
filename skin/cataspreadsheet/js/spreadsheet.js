var cataSpreadsheet;

// jQuery wrapper
(function ($) {
    // Declares private functions and returns an object
    cataSpreadsheet = (function () {
        // Is any array longer than 8 items?
        var isDataGood = function (data) {
            var OK = true;

            for (var a = 0; a < data.length; a += 1) {
                if ( a === 8 ) {
                    OK = false;
                    break;
                }

                for (var b = 0; b < data[a].length; b += 1) {
                    if ( b === 8 ) {
                        OK = false;
                        break;
                    }
                }
            }

            return OK;
        };

        // Remove empty indexes unless followed by a non-empty index
        var sanitizeData = function (data) {
            // First remove empty values at the end of a collection
            for (var a = 0; a < data.length; a += 1) {
                for (var b = data[a].length - 1; b >= 0; b -=1) {
                    if (data[a][b] !== '') {
                        break;
                    }

                    data[a] = data[a].slice(0, b);
                }
            }

            // Then remove empty collections at the end of the array
            for (var i = data.length - 1; i >= 0; i -=1) {
                if (data[i].length) {
                    break;
                }

                data = data.slice(0, i);
            }

            return data;
        };

        var extractDataFromTable = function ($table) {
            var data = [];

            $table.find('tr').each(function () {
                var $tr = $(this),
                    a = $tr.index();

                data[a] = [];

                $tr.find('td').each(function () {
                    var $td = $(this),
                        $input = $td.find('input'),
                        b = $td.index();

                    data[a][b] = $input.val() || '';

                });
            });

            // Let's explain some other time why I chose to save val() || ''
            // for 100% of indexes and sanitize afterwards
            return sanitizeData(data);
        };

        var populateTableWithData = function ($table, data) {
            // Reset table of any old values
            $table.find('td').find('input').val('');

            for (var a = 0; a < data.length; a += 1) {
                for (var b = 0; b < data[a].length; b += 1) {
                    // If there's something at the index, where something can also be 0
                    if ( data[a][b] || data[a][b] === 0) {
                        var $target = $table.find('tr').eq(a).find('td').eq(b).find('input'),
                            newValue = data[a][b];

                        $target.val(newValue);
                    }
                }
            }
        };

        return {
            isDataGood: isDataGood,
            extractData: extractDataFromTable,
            populateTable: populateTableWithData
        };
    })()
})(jQuery);