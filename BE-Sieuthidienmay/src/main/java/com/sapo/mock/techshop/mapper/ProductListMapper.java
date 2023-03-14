package com.sapo.mock.techshop.mapper;

import com.sapo.mock.techshop.dto.response.ProductDashboardResponseDTO;
import com.sapo.mock.techshop.entity.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductListMapper {
    @Mapping(target = "collectionId", source = "collection.id")
    ProductDashboardResponseDTO toDTO(Product entity);
}
