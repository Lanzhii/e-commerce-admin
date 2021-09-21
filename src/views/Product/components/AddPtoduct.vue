<template>
  <div>
    <el-dialog
      title="商品属性填写单"
      :visible="visible"
      width="50%"
      :before-close="close"
      :modal-append-to-body="false"
    >
      <el-row :gutter="10" type="flex" justify="center">
        <el-col :span="12">
          <el-form ref="form" :model="form" label-width="80px">
            <el-form-item
              v-for="(item, n) in fromInfo"
              :key="n"
              :label="item.name"
            >
              <el-input
                v-model="item.model"
                :type="item.type"
                :placeholder="item.tips"
                size="mini"
              />{{ item.model }}
            </el-form-item>
            <el-form-item label="是否允许评论" label-width="120px">
              <el-switch v-model="form.delivery" />
            </el-form-item>
          </el-form>
        </el-col>
        <el-col :span="12">
          <el-upload
            action="https://jsonplaceholder.typicode.com/posts/"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove"
          >
            <i class="el-icon-plus" />
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
          <el-dialog :visible.sync="dialogVisible">
            <img width="100%" :src="dialogImageUrl" alt="">
          </el-dialog>
        </el-col>
      </el-row>
      <el-row slot="footer" type="flex" justify="center">
        <el-button type="primary" @click="submit">保存并提交审核</el-button>
        <el-button type="warning" @click="draft">保存草稿</el-button>
        <el-button type="info" @click="cancel">取消</el-button>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
export default {
  props: {
    visible: {
      type: Boolean,
      require: true
    }
  },
  data() {
    return {
      form: {
        product: '',
        number: '',
        brand: '',
        bid: '',
        price: '',
        classify: '',
        supplier: '',
        repotery: '',
        keywprd: '',
        desc: '',
        delivery: true
      },
      fromInfo: [
        { name: '商品名称', tips: '请输入商品名称', type: 'text', model: '' },
        { name: '商品编号', tips: '请输入商品编号', type: 'text', model: '' },
        { name: '商品品牌', tips: '请输入商品品牌', type: 'text', model: '' },
        { name: '进货价', tips: '请输入采购价', type: 'text', model: '' },
        { name: '销售价', tips: '请输入销售价', type: 'text', model: '' },
        { name: '商品类别', tips: '请输入商品类别', type: 'text', model: '' },
        { name: '供应商', tips: '请输入供应商', type: 'text', model: '' },
        { name: '库存数量', tips: '请输入库存量', type: 'text', model: '' },
        {
          name: '关键词搜索',
          tips: '请输入商品搜索关键词',
          type: 'textarea',
          model: ''
        }
      ],
      fileList: [],
      dialogImageUrl: '',
      dialogVisible: false
    }
  },
  methods: {
    close() {
      this.$emit('del')
    },
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    submit() {

    },
    draft() {

    },
    cancel() {

    }
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 5px;
}
.el-input {
  width: 80%;
}
.el-dialog{z-index: 2005;}
</style>
