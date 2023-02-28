class ApiFeatures {
  constructor(query, queryStr) {
    this.query = query;
    this.queryStr = queryStr;
  }

  search() {
    const keyword = this.queryStr.keyword
      ? {
          name: {
            $regex: this.queryStr.keyword,
            $options: "i",
          },
        }
      : {};

    // console.log(keyword);  
    this.query = this.query.find({ ...keyword });
    return this;
  }

  filter() {
    // this should not be used as this.queryStr is an object and refrence would be passed to queryCopy
    // but we need actual copy of object so rest operator is used 
    // so that when queryCopy change it does not change the actual queryStr
      
    // const queryCopy = this.queryStr;

    const queryCopy = { ...this.queryStr };
    //   Removing some fields for category
    // console.log(queryCopy);  

    const removeFields = ["keyword", "page", "limit"];

    removeFields.forEach((key) => delete queryCopy[key]);

    // console.log(queryCopy);  


    // Filter For Price and Rating

    let queryStr = JSON.stringify(queryCopy);
    queryStr = queryStr.replace(/\b(gt|gte|lt|lte)\b/g, (key) => `$${key}`);

    this.query = this.query.find(JSON.parse(queryStr));

    return this;
  }

  pagination(resultPerPage) {
    const currentPage = Number(this.queryStr.page) || 1;

    const skip = resultPerPage * (currentPage - 1);

    this.query = this.query.limit(resultPerPage).skip(skip);

    return this;
  }
}

module.exports = ApiFeatures;
