/**
 * Created by myimac on 17/9/6.
 */
import config from './config'
import axios from 'axios'

export const usedList = () => {
  return axios.post(config.used_lists)
}
export const usedDetail = () => {
  return axios.post(config.used_detail)
}
// 二手房列表详情
export const login = () => {
  return axios.post(config.login)
}
// 登录
export const register = () => {
  return axios.post(config.register)
}
// 注册
export const adLists = () => {
  return axios.post(config.adLists)
}
// 新闻列表
export const adDetail = () => {
  return axios.post(config.adDetail)
}
// 新闻详情
export const bottomLists = () => {
  return axios.post(config.bottomLists)
}
// 底部网站管理列表
export const bottomDetail = () => {
  return axios.post(config.bottomDetail)
}
// 底部网站管理详情
export const regionDetail = () => {
  return axios.post(config.region_detail)
}
// 区域详情
export const Agentlists = () => {
  return axios.post(config.Agentlists)
}
// 经纪人列表
export const Agentdetail = () => {
  return axios.post(config.Agentdetail)
}
// 经纪人详情
export const Userlists = () => {
  return axios.post(config.Userlists)
}
// 会员列表
export const Userdetail = () => {
  return axios.post(config.Userdetail)
}
// 会员详情
export const Storelists = () => {
  return axios.post(config.Storelists)
}
export const Storedetail = () => {
  return axios.post(config.Storedetail)
}
export const EncyTop = () => {
  return axios.post(config.EncyTop)
}
export const EncyType = () => {
  return axios.post(config.EncyType)
}
// 百科分类
export const EncyList = () => {
  return axios.post(config.EncyList)
}
// 百科分类列表
export const EncyDetail = () => {
  return axios.post(config.EncyDetail)
}
// 百科分类详情
export const EncyTypeList = () => {
  return axios.post(config.EncyTypeList)
}
// 百科所有分类
export const EncySearch = () => {
  return axios.post(config.EncySearch)
}
// 百科搜索
export const RegionLists = () => {
  return axios.post(config.RegionLists)
}
// 区域接口
export const Detaail = () => {
  return axios.post(config.Detaail)
}
// 用户详情
export const StoreLists = () => {
  return axios.post(config.StoreLists)
}
// 门店列表
export const StoreDetail = () => {
  return axios.post(config.StoreDetail)
}
// 门店详情
export const RetalLists = () => {
  return axios.post(config.RetalLists)
}
// 租房列表
export const RtalDetail = () => {
  return axios.post(config.RtalDetail)
}
// 租房详情
export const OperationUser = () => {
  return axios.post(config.OperationUser)
}
// 帮我找房
export const OperationOwner = () => {
  return axios.post(config.OperationOwner)
}
// 我是业主
export const VillageList = () => {
  return axios.post(config.VillageList)
}
// 小区列表
export const VillageDetail = () => {
  return axios.post(config.VillageDetail)
}
// 小区详情
export const villageCollect = () => {
  return axios.post(config.villageCollect)
}
// 关注小区
export const villageCollectList = () => {
  return axios.post(config.villageCollectList)
}
export const manyVillageCollectCancel = () => {
  return axios.post(config.manyVillageCollectCancel)
}
// 取消小区关注
export const VillageMore = () => {
  return axios.post(config.VillageMore)
}
// 小区更多简介
export const BasicsDrop = () => {
  return axios.post(config.BasicsDrop)
}
// 更多
export const OperationHouse = () => {
  return axios.post(config.OperationHouse)
}
// 关注房源
export const OperationHouseCancel = () => {
  return axios.post(config.OperationHouseCancel)
}
// 取消关注房源
export const OperationUsers = () => {
  return axios.post(config.OperationUsers)
}
// 我的关注房源
export const RecordYK = () => {
  return axios.post(config.RecordYK)
}
// 添加约看列表
export const RecordLists = () => {
  return axios.post(config.RecordLists)
}
// 越看列表
export const RecordDK = () => {
  return axios.post(config.RecordDK)
}
// 添加约看新房
export const NewList = () => {
  return axios.post(config.NewList)
}
// 新房列表
export const NewDetail = () => {
  return axios.post(config.New_Detail)
}
// 新房详情
export const AgentListsByHouse = () => {
  return axios.post(config.AgentListsByHouse)
}
// 预约看房经纪人
export const OperationMysuer = () => {
  return axios.post(config.OperationMysuer)
}
// 我的经纪人
export const OperationAgentCollect = () => {
  return axios.post(config.OperationAgentCollect)
}
// 收藏经纪人
export const OperationAgentCollectCancel = () => {
  return axios.post(config.OperationAgentCollectCancel)
}
// 取消收藏经济人
export const OperationVillageCollect = () => {
  return axios.post(config.OperationVillageCollect)
}
// 看房纪录
export const RecordRichenglists = () => {
  return axios.post(config.RecordRicheng_lists)
}
// 看房日程列表
export const RecordDaikan = () => {
  return axios.post(config.RecordDaikan)
}
// 带看记录详情
export const CalculatorIndex = () => {
  return axios.post(config.CalculatorIndex)
}
// 房贷计算器
export const OperationAssess = () => {
  return axios.post(config.OperationAssess)
}
// 房屋估价
export const CalculatorNew = () => {
  return axios.post(config.CalculatorNew)
}
// 新房税率
export const VillageSchool = () => {
  return axios.post(config.VillageSchool)
}
// 学区房
export const VillageSchoolLists = () => {
  return axios.post(config.VillageSchoolLists)
}
// 学区房列表
export const CalculatorHouseTax = () => {
  return axios.post(config.CalculatorHouseTax)
}
// 二手房税率
export const AgentComment = () => {
  return axios.post(config.AgentComment)
}
// 经纪人评房
export const ProductRecord = () => {
  return axios.post(config.ProductRecord)
}
// 带看记录
export const ProductWap = () => {
  return axios.post(config.ProductWap)
}
// 热门推荐
export const BootomBilts = () => {
  return axios.post(config.BootomBilts)
}
// 版权信息
export const MapMapHouse = () => {
  return axios.post(config.MapMapHouse)
}
// 地图找房
export const VillageDeal = () => {
  return axios.post(config.VillageDeal)
}
// 成交记录
export const productUsedP = () => {
  return axios.post(config.productUsedP)
}
// 户型格局
export const mapHouseVillage = () => {
  return axios.post(config.mapHouseVillage)
}
// 地图小区列表
export const MsgVerify = () => {
  return axios.post(config.MsgVerify)
}
// 验证码
export const SendMsg = () => {
  return axios.post(config.SendMsg)
}
// 发送验证码
export const Forget = () => {
  return axios.post(config.Forget)
}
// 修改密码
export const SpecialLsit = () => {
  return axios.post(config.SpecialLsit)
}
export const SpecialDetail = () => {
  return axios.post(config.SpecialDetail)
}
export const SpecialVerify = () => {
  return axios.post(config.SpecialVerify)
}
export const SpecialSpecialEnrol = () => {
  return axios.post(config.SpecialSpecialEnrol)
}
export const AdAll = () => {
  return axios.post(config.AdAll)
}

export const OperationFeedback = () => {
  return axios.post(config.OperationFeedback)
}
// 反馈
export const newAllhouseType = () => {
  return axios.post(config.newAllhouseType)
}
// 新房详情全部户型
export const VillageFind = () => {
  return axios.post(config.VillageFind)
}
// 搜索
export const AgentHouseList = () => {
  return axios.post(config.AgentHouseList)
}
// 经纪人详情房源列表
export const RecordDelete = () => {
  return axios.post(config.RecordDelete)
}
// 看房清单删除
export const Tlogin = () => {
  return axios.post(config.Tlogin)
}
// qq登录
export const Ntlogin = () => {
  return axios.post(config.Ntlogin)
}
// 第三方登录(qq 微博)
export const encyTop = () => {
  return axios.post(config.encyTop)
}
export const usedHouse = function (data) {
  return axios.get(config.used_lists, {params: data})
}
