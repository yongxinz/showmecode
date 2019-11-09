<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <div>{{props.row}}</div>
        <hr>
        <div>{{childrentableinfo}}</div>
        <Table
          :data="childrentableinfo['AAA']"
          style="width: 100%"
          row-key="id"
        >
          <el-table-column
            prop="date"
            label="日期"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="name"
            label="姓名"
            width="180"
          >
          </el-table-column>
          <el-table-column
            prop="address"
            label="地址"
          >
          </el-table-column>
        </Table>
      </template>
    </el-table-column>
    <el-table-column
      label="商品 ID"
      prop="id"
    >
    </el-table-column>
    <el-table-column
      label="商品名称"
      prop="name"
    >
    </el-table-column>
    <el-table-column
      label="描述"
      prop="desc"
    >
    </el-table-column>
  </el-table>
</template>

<style>
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .FormItem {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>

<script>
export default {
  methods: {
    getdata () {
      // console.log('获取数据函数');
      return this.tableData1;
    }
  },
  created () {
    this.childrentableinfo = {
      AAA: this.tableData1
    };
  },
  data () {
    return {
      childrentableinfo: {},
      tableData: [{
        id: '12987122',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987123',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987125',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }, {
        id: '12987126',
        name: '好滋好味鸡蛋仔',
        category: '江浙小吃、小吃零食',
        desc: '荷兰优质淡奶，奶香浓而不腻',
        address: '上海市普陀区真北路',
        shop: '王小虎夫妻店',
        shopId: '10333'
      }],
      tableData1: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }]

    };
  }
}
;
</script>
